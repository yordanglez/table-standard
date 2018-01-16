import {
    Component, ContentChildren, EventEmitter, Input, OnInit, Output, Pipe, QueryList,
    ViewEncapsulation
} from '@angular/core';
import {Column, DataColumn} from "./model/data-column";
import { toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";
import {DomSanitizer} from "@angular/platform-browser";
import {DataColumnDirective} from "./directives/data-column.directive";

@Component({
    selector: 'table-standard',
    templateUrl: "./table-standard.component.html",
    styleUrls: ["../assets/css/uikit.css"],
    encapsulation: ViewEncapsulation.None,
})
export class TableStandardComponent implements OnInit {

    @Input() data_store: any[];
    @Input() count_rows: number;
    @Input() tableClassList: any;
    @Input() rowClassList: any;
    @Input() cellClassList: any;
    @Output() click_row: EventEmitter<{value:any,row:any}>;
    @Output() click_cell: EventEmitter<{value:any,cell:any}>;
    @ContentChildren(DataColumnDirective) columns: QueryList<DataColumnDirective>;
    data_render: any[];
    data_ordered: any[];

    current_page: number;
    count_data: number;
    count_pages: number;
    sortBy = 'None'


    constructor(private sanitizer: DomSanitizer) {
        this.click_row = new EventEmitter();
        this.click_cell = new EventEmitter();
        this.data_store=[]
        this.data_ordered=[]
        this.current_page = 1;
        this.count_rows = 10;
    }

    ngOnInit() {
        this.count_data = toInteger(this.data_store.length);

        if (this.count_data) {
            this.count_pages = this.count_data / toInteger(this.count_rows);
            this.count_pages = this.count_data % toInteger(this.count_rows) ? this.count_pages + 1 : this.count_pages;
        }
        else
            this.count_pages = 1;
        this.count_pages = toInteger(this.count_pages);
        this.data_ordered = this.data_store.slice();
        this.changePage(this.current_page);
    }

    onChangePage(num_page: number) {
        this.changePage(num_page);
    }

    changePage(page: number) {

        let start: number = this.count_rows * (page - 1);
        let end = start + toInteger(this.count_rows);
        this.data_render = this.data_ordered.slice(start, end);
        this.current_page=page;
    }
    onSortBy(column)
    {
        if(column.sortBy =="NONE"  )
            column.sortBy = "ASC";
        else if(column.sortBy =="ASC")
            column.sortBy = 'DESC';
        else
            column.sortBy = 'NONE';

        this.columns.forEach((col)=>{
            if(column.property!=col.property)
                col.sortBy='NONE';
        })

        if(column.sortBy=="NONE")
            this.data_ordered = this.data_store.slice();
        else
            this.sortData(column.property,column.sortBy=="ASC");
        this.changePage(this.current_page);
    }

    sortData(property,asc)
    {
        this.data_ordered.sort((a,b)=>{
            if(a[property]<b[property])
                return -1;
            else if(a[property]<b[property])
                return 1;
            return 0;
        })
        if(!asc)
            this.data_ordered.reverse();
    }

    onClickRow(value,row)
    {
        // console.log({value,row});
        this.click_row.emit({value,row});
    }
    onClickCell(value,cell)
    {
        // console.log({value,cell});
        this.click_cell.emit({value,cell});
    }




}



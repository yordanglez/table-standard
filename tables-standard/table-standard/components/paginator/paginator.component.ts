import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'paginator-standard',
    templateUrl: "./paginator.component.html"
})
export class PaginatorComponent implements OnInit {

    @Output() change_page: EventEmitter<number>;
    @Input() count_data: number;
    @Input() count_pages: number;
    pages: number[];
    current_page: number;

    constructor() {
        this.change_page = new EventEmitter();
        this.pages = [];
        this.current_page = 1;
    }

    ngOnInit() {

        for (let i = 1; i <= this.count_pages; i++)
            this.pages.push(i);

        // this.pages = toInteger(this.data_store.length) / toInteger(this.count_rows);

    }

    onChangePage(num_page: number) {
        if (num_page > 0 && num_page <= this.count_pages) {
            this.change_page.emit(num_page);
            this.current_page = num_page;
        }

    }

}

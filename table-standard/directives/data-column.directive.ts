import {ContentChild, Directive, Input} from '@angular/core';

@Directive({
  selector: 'data-column'
})
export class DataColumnDirective {

    @Input() property: string;
    @Input() title : string;
    @Input() sorteable =false;
    sortBy = 'NONE';
    @ContentChild('cellDisplay') cellTemplate;
    @ContentChild('headerDisplay') headerTemplate;

  constructor() { }

}

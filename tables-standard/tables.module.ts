import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStandardComponent} from "./table-standard/table-standard.component";
import { PaginatorComponent } from './table-standard/components/paginator/paginator.component';
import { SafePipe } from './pipes/safe.pipe';
import { DataColumnDirective } from './table-standard/directives/data-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableStandardComponent, PaginatorComponent,SafePipe, DataColumnDirective],
    exports:[TableStandardComponent,DataColumnDirective],
    providers:[]

})
export class TablesModule { }

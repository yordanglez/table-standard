# angular-table-standard

table-satandard is a component for creating tables for angular v2 or more

# Examples

The first step is to include the module in our APP


```typescript
import {NgModule} from '@angular/core';
import {TablesModule} from "table-standard/tables.module";

@NgModule ({
  imports: [
    TablesModule
  ],
})
export class AppModule {}
```

## Creating our table

Now we can use all the components and directives provided by the module, as we will see below.
With the tag **table-standard** we will add our table and its properties

**Example**:
```html
    <table-standard
        [data_store] = "store"
        [count_rows] = "2"
        (click_row)="onClickRow($event)"
        (click_cell)="onClickCell($event)"
        [tableClassList]="'my_class'"
        [rowClassList]="{'class_active': item.active == true}"
        [cellClassList]="['mi_class1', 'my_class2']"
    >
    </table-standard>
```
These are parameters for tag **table-standard** :

**data_store**: These are the data that the table will have. The type will be a name_value list.

**count_rows**: Number of rows per page.

**tableClassList**: Class list for the table in format as ngClass. 

**tableClassList**: Class list for the row in format as ngClass.  

**cellClassList**: Class list for the cell in format as ngClass. 



These are events for tag **table-standard**.

**click_row**: This event is triggered by clicking on a row. 

**click_cell**: This event is triggered by clicking on a cell. 





## Defining columns

The **data-column** tag will define the columns of the table and their properties.

**Example**:
```html
    <table-standard
        [data_store] = "store"
        [count_rows] = "2"

    >
        <data-column
            [property] = "'name'"
            [title] = "'Name'"
            [sorteable] = "true">
            
        </data-column>
    </table-standard>
```

These are parameters for tag **data-column**.

**property**: The value of this parameter must match with the key in the item of **data_store**. Example (if **property** = "id" in **data_store** the key **id** must exist).

**title**: Name that will be shown in the header of the column.

**sorteable**: If it is **true** the column could be ordered.




The **ng-template** tag with the reference **#cellDisplay** defines how the cell will be rendered with the element

```html

    <table-standard
        [data_store] = "store"
        [count_rows] = "2"
    >
        <data-column
            [property] = "'name'"
            [title] = "'Name'"
            [sorteable] = "true">
            
            <ng-template let-my_item_name = "item" #cellDisplay>
                <div style = "color: red"> {{my_item_name.my_param}} </div>
            </ng-template>
            
        </data-column>
    </table-standard>
     
```

**let-?="item"**: It will be the name in the context of the **ng-template** that will be given to the item

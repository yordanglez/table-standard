# angular-table-standard

table-satandard is a component for creating tables for angular v2 or more

# Examples

The first step is to include the module in our APP


```typescript
import {NgModule} from '@ angular / core';
import {TablesModule} from "tables.module";

@NgModule ({
  imports: [
    TablesModule
  ],
})
export class AppModule {}
```

Now we can use all the components and directives provided by the module, as we will see below.
With the tag **<table-standard>** we will add our table and its properties

**Example**
```html
    <table-standard
        [data_store] = "store"
        [count_rows] = "2"
    >
    </table-standard>
```
These are parameters for tag **<table-standard>** :

**data_store**: These are the data that the table will have. The type will be a name_value list.

**count_rows**: Number of rows per page



The **<data-column>** tag will define the columns of the table and their properties.

**Example**
```html
    <table-standard
        [data_store] = "store"
        [count_rows] = "2"
    >
        <data-column>
            [property] = "'name'"
            [title] = "'Name'"
            [sorteable] = "true"
            
        </data-column>
    </table-standard>
```

The following parameters of the tag **<data-column>**.

**property**: The value of this parameter must match with the key in the item of **data_store**. Example (if **property** = "id" in **data_store** the key **id** must exist).

**title**: Name that will be shown in the header of the column.

**sorteable**: If it is **true** the column could be ordered.


The **<ng-template>** tag with the reference **#cellDisplay** defines how the cell will be rendered with the element
```html

     <ng-template let-my_item_name = "item" #cellDisplay>
        <div style = "color: red"> {{item.my_item_name}} </div>
     </ng-template>
```

**let-?="item"**: It will be the name in the context of the **ng-template** that will be given to the item


# table-standard

table-satandard es un componentes para crear tablas para angular superior a partir de la v2

#Examples

El primer paso es incluir el modulo en nuestra APP


```typescript
import { NgModule } from '@angular/core';
import {TablesModule} from "tables.module";

@NgModule({
  imports: [
    TablesModule
  ],
})
export class AppModule { }
```

Ahora podemos usar todos los componentes y directivas proporcionadas por el modulo, como vermemos  a continuación.

Con la etiqueta **<table-standard>** añadiremos nuestra tabla y sus propiedades

**Example**
```html
    <table-standard
        [data_store]="store"
        [count_rows]="2"
    >
    </table-standard>
```
Los siguientes parametros de la etiqueta **<table-standard>**
**data_store**: Son los datos que que tendra la tabla. El tipo sera una lista de name_value
**count_rows**: Cantidad de filas por cada pagina



La etiqueta **<data-column>** definira las columnas de la tabla y sus propiedades.

**Example**
```html
    <table-standard
        [data_store]="store"
        [count_rows]="2"
    >
        <data-column>
            [property]="'name'"
            [title]="'Name'" 
            [sorteable]="true"
            
        </data-column>
    </table-standard>
```

Los siguientes parametros de la etiqueta **<data-column>**.

**property**: El valor de este parametro debe matchear con el key en el item de **data_store**. Ejemplo( si **property**="id" en **data_store** tiene que existir la clave **id** ).
**title**: Nombre que se mostrara en el header de la columna.
**sorteable**: Si es *true* la columna se podra ordenar en caso contrario no.


La etiqueta **<ng-template>** con la referencia **#cellDisplay** define la forma en que se renderizara la celda con el elemento
```html

     <ng-template let-my_item_name="item" #cellDisplay>
        <div style="color: red">{{item.my_item_name}}</div>
     </ng-template>
```

**let-?="item"** : Sera el nombre en el contexto del **ng-template** que se le dara al item
export class Column {

    property: string;
    title: string;
    sorteable: boolean;

    constructor(data: any) {

        this.property = data.property;
        this.title = data.title;
        this.sorteable = data.sorteable;

    }


}

export class DataColumn {
    data_columns: Column[];

    constructor(data_columns: Column[]) {
        this.data_columns= data_columns;

    }
}
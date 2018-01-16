import {Column} from "../model/data-column";

export class BuilderColumns{

    static create(data:any){
        return data.map(column => new Column(column))
    }
}
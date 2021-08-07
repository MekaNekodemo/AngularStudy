import { Employee } from "./Employee";

export class Department {

    employeeIds: Array<String> = new Array<String>();

    name: string;

    constructor(private _id: string, name: string){
        this.name = name;
        
    }

    get id(){
        return this._id;
    }


    addEmployee(employeeId: String ){
        this.employeeIds.push(employeeId);
    }


}




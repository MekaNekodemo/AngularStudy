import { Employee } from "./Employee";

export class Department {

    employeeIds: Array<string> = new Array<string>();

    name: string;

    constructor(private _id: string, name: string){
        this.name = name;
        
    }

    get id(){
        return this._id;
    }


    addEmployee(employeeId: string ){
        this.employeeIds.push(employeeId);
    }


}




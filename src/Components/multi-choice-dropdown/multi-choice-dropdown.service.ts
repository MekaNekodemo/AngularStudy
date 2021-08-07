
import { Injectable } from '@angular/core';
import { Department } from '../../Models/Department';
import { Employee } from '../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class MultiChoiceDropdownService {

  getDepartments(){

    let departments = new Array<Department>();

    let salg = new Department("1", "Salg");
    let HR = new Department("2", "HR");
    let Prod = new Department("3", "Production");
    let Dev = new Department("4", "Development");

    salg.addEmployee("1");
    salg.addEmployee("2");
    salg.addEmployee("3");
    HR.addEmployee("4");
    HR.addEmployee("5");
    HR.addEmployee("6");
    Prod.addEmployee("7");
    Prod.addEmployee("8");
    Prod.addEmployee("9");
    Dev.addEmployee("10");
    Dev.addEmployee("11");
    
    departments.push(salg)
    departments.push(HR)
    departments.push(Prod)
    departments.push(Dev)

    return departments;
  }

  

}

import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getEmployees(){

    let employees = new Array<Employee>();

    employees.push(new Employee("1","Lisa", "Hansen", "07/08/1988"));
    employees.push(new Employee("2","Lars", "Larsen", "08/08/1966"));
    employees.push(new Employee("3","Stine", "Stinesen", "09/08/1970"));
    employees.push(new Employee("4","Torben", "Torsen", "07/09/1966"));
    employees.push(new Employee("5","Agate", "Agnete", "20/08/2000"));
    employees.push(new Employee("6","Børge", "Borvard", "21/08/2001"));
    employees.push(new Employee("7","Britta", "Hansen", "03/02/1999"));
    employees.push(new Employee("8","Mogens", "Hansen", "16/09/1992"));
    employees.push(new Employee("9","Kristine", "Christensen", "10/08/1988"));
    employees.push(new Employee("10","Svend", "Ole Rasmussen", "07/12/2000"));
    employees.push(new Employee("11","Olga", "Dine", "30/08/1986"));

    return employees;
  }

}

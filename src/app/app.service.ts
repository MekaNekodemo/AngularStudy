import { Injectable } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getEmployees(){

    let listOfEmployees = new Array<Employee>();

    let employeesAsJSON = JSON.stringify(this.employees);

    let employeesFromJSON = JSON.parse(employeesAsJSON)

    
    employeesFromJSON.forEach((employee: Employee) => {
      listOfEmployees.push(employee)
    });

    return listOfEmployees;
  }



  getDepartments(){

    let listOfDepartments = new Array<Department>();

    let departmentsAsJSON = JSON.stringify(this.deparments)

    let departmentsFromJSON = JSON.parse(departmentsAsJSON)

    departmentsFromJSON.forEach((department: Department) => {
      listOfDepartments.push(department)
    });

    

    return listOfDepartments;
  }

  employees = [
    {
      id:"1",
      name: "Lisa",
      surname: "Hansen",
      birthdate:"07/08/1988",
      photoUrl: ""
    },
    {
      id:"2",
      name: "Lars",
      surname: "Larsen",
      birthdate:"08/08/1966",
      photoUrl: ""
    },
    {
      id:"3",
      name: "Stine",
      surname: "Stinesen",
      birthdate:"09/08/1970",
      photoUrl: ""
    },
    {
      id:"4",
      name: "Torben",
      surname: "Torsen",
      birthdate:"07/09/1966",
      photoUrl: ""
    },
    {
      id:"5",
      name: "Agate",
      surname: "Agnete",
      birthdate:"20/08/2000",
      photoUrl: ""
    },
    {
      id:"6",
      name: "Børge",
      surname: "Borvard",
      birthdate:"21/08/2001",
      photoUrl: ""
    },
    {
      id:"7",
      name: "Britta",
      surname: "Hansen",
      birthdate:"16/09/1992",
      photoUrl: ""
    },
    {
      id:"8",
      name: "Mogens",
      surname: "Hansen",
      birthdate:"10/08/1988",
      photoUrl: ""
    },
    {
      id:"9",
      name: "Kristine",
      surname: "Christensen",
      birthdate:"07/12/2000",
      photoUrl: ""
    },
    {
      id:"10",
      name: "Svend",
      surname: "Ole Rasmussen",
      birthdate:"03/02/1999",
      photoUrl: ""
    },
    {
      id:"11",
      name: "Olga",
      surname: "Dine",
      birthdate:"30/08/1986",
      photoUrl: ""
    }
  ]

  deparments = [
    {
      id: "1",
      name: "Salg",
      employeeIds : ["1", "2", "3"]
    },
    {
      id: "2",
      name: "HR",
      employeeIds : ["4", "5", "6"]
    },
    {
      id: "3",
      name: "Produktion",
      employeeIds : ["7", "8", "9"]
    },
    {
      id: "4",
      name: "Development",
      employeeIds : ["10", "11"]
    },

  ]




}

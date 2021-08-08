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

    console.log(employeesAsJSON)

    let employeesFromJSON: Array<any> = JSON.parse(employeesAsJSON)

    employeesFromJSON.forEach(item =>{
      console.log(item.birthdate)
    })

    
    employeesFromJSON.forEach((obj) => {
      let employee: Employee = new Employee(obj.id, obj.name, obj.surname, obj.birthdate, obj.photoUrl);
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
      birthdate:"1988-08-07",
      photoUrl: ""
    },
    {
      id:"2",
      name: "Lars",
      surname: "Larsen",
      birthdate:"1966-08-08",
      photoUrl: ""
    },
    {
      id:"3",
      name: "Stine",
      surname: "Stinesen",
      birthdate:"1970-08-09",
      photoUrl: ""
    },
    {
      id:"4",
      name: "Torben",
      surname: "Torsen",
      birthdate:"1966-09-07",
      photoUrl: ""
    },
    {
      id:"5",
      name: "Agate",
      surname: "Agnete",
      birthdate:"2000-08-20",
      photoUrl: ""
    },
    {
      id:"6",
      name: "Børge",
      surname: "Borvard",
      birthdate:"2001-08-21",
      photoUrl: ""
    },
    {
      id:"7",
      name: "Britta",
      surname: "Hansen",
      birthdate:"1992-09-16",
      photoUrl: ""
    },
    {
      id:"8",
      name: "Mogens",
      surname: "Hansen",
      birthdate:"1988-08-10",
      photoUrl: ""
    },
    {
      id:"9",
      name: "Kristine",
      surname: "Christensen",
      birthdate:"2000-12-07",
      photoUrl: ""
    },
    {
      id:"10",
      name: "Svend",
      surname: "Ole Rasmussen",
      birthdate:"1999-12-07",
      photoUrl: ""
    },
    {
      id:"11",
      name: "Olga",
      surname: "Dine",
      birthdate:"1986-08-30",
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

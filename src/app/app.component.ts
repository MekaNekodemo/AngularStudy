import { AppService } from './app.service';
import { Employee } from './../Models/Employee';
import { Component } from '@angular/core';
import { Department } from 'src/Models/Department';
import { getWeek } from 'src/Models/Date Functions/weekFunction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Birthdays!';

  departments = new Array<Department>();
  listView_Employees = new Array<Employee>();

  dropdownList = new Array<any>();

  selectedDepartments = new Array<any>();

  dropdownSettings = {};

  checkWeek: boolean;
  checkMonth: boolean;

  service: AppService;

  constructor(service: AppService) {
    this.departments = service.getDepartments();
    this.service = service

    this.checkWeek = true;
    this.checkMonth = false;
  }


  ngOnInit() {
    this.departments.forEach((department: Department) => {
      this.dropdownList.push({ "id": department.id, "itemName": department.name, "employeeIds": department.employeeIds })
    })

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Deparments",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

  }

birthdayFilter(employee: Employee) {

  let pass = false;

  let today = new Date();
  let date = new Date(today.getFullYear(), employee.birthdate.getMonth(), employee.birthdate.getDay());
  let currentWeek =  getWeek(today);
  let currentMonth = new Date().getMonth() +1 ;
  let birthdayWeek = getWeek(date)
  let birthdayMonth = date.getMonth() +1;

  if (this.checkWeek === false && this.checkMonth === false) {
      pass = true;
  }
  else if (this.checkWeek === true && currentWeek === birthdayWeek ) {
      pass = true;
  }
  else if (this.checkMonth === true && birthdayMonth === currentMonth) {
      pass = true;
  }
  return pass;
}

updateEmployeeList(){

  this.listView_Employees = new Array<Employee>();

  this.service.getEmployees().forEach((employee) => {
    console.log(employee.birthdate) 
    this.selectedDepartments.forEach(department => {

      if (department.employeeIds.includes(employee.id)) {
        
        if(this.birthdayFilter(employee) === true){
          
          this.listView_Employees.push(employee)
        }
        
      }
    })
  })
}
}

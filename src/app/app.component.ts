import { AppService } from './app.service';
import { Employee } from './../Models/Employee';
import { Component } from '@angular/core';
import { Department } from 'src/Models/Department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Birthdays!';

  departments = new Array<Department>();
  listOfEmployees = new Array<Employee>();

  dropdownList = new Array<any>();

  selectedItems = new Array<any>();

  dropdownSettings = {};

  currentWeek: boolean;
  currentMonth: boolean;
  service: AppService;

  constructor(service: AppService) {
    this.departments = service.getDepartments();
    this.service = service
    this.currentWeek = true;
    this.currentMonth= false;
  }


  ngOnInit() {
    this.departments.forEach((department: Department) => {
      this.dropdownList.push({"id" : department.id, "itemName": department.name, "employeeIds" : department.employeeIds})
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

  updateFilter() {
    
    this.updateEmployeeList()

  }

  updateEmployeeList(){

    this.listOfEmployees = new Array<Employee>();

    let allEmployees = this.service.getEmployees();

    allEmployees.forEach((employee) =>{
      this.selectedItems.forEach(item =>{
        if(item.employeeIds.includes(employee.id)){
          this.listOfEmployees.push(employee)
        }
      })
    })
  }



  

  


}

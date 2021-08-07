import { AppService } from './app.service';
import { Employee } from './../Models/Employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birthdays!';

  currentWeek: boolean = false;
  currentMonth: boolean = false;

  listOfEmployees = new Array<Employee>();

  constructor(service: AppService){
    this.listOfEmployees = service.getEmployees();
  }
  
  
  //TODO:  Why does this method need type inferance of the event object?
  updateFilter(){
    
    console.log("current week? : " + this.currentWeek)
    console.log("current month? : " + this.currentMonth)

    
  }

  

}

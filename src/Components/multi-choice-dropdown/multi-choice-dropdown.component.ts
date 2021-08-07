
import { MultiChoiceDropdownService } from './multi-choice-dropdown.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from '../../Models/Department';


@Component({
  selector: 'multiChoiceDropdown',
  templateUrl: './multi-choice-dropdown.component.html',
  styleUrls: ['./multi-choice-dropdown.component.css']
})
export class MultiChoiceDropdownComponent implements OnInit {
  
  departments = new Array<Department>();

  dropdownList = new Array<any>();

  selectedItems = new Array<any>();

  dropdownSettings = {};

  constructor(service: MultiChoiceDropdownService){
    this.departments = service.getDepartments();
  }


  ngOnInit(){
      this.departments.forEach((department: Department) => {
        this.dropdownList.push({"id": department.id, "itemName": department.name})
      })
                           
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Deparments",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };            
  }

  
  onSelect(){
    console.log("Log from onselect")
    this.emitter.emit(this.selectedItems)
  }
  onSelectAll(items: any){
     
  }
  onDeSelectAll(items: any){
     
  }

}

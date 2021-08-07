import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiChoiceDropdownComponent } from '../Components/multi-choice-dropdown/multi-choice-dropdown.component';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { EmployeeCardComponent } from '../Components/employee-card/employee-card.component';
import { AppService } from './app.service';
import { MultiChoiceDropdownService } from 'src/Components/multi-choice-dropdown/multi-choice-dropdown.service';

@NgModule({
  declarations: [
    AppComponent,
    MultiChoiceDropdownComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    FormsModule,
  ],
  providers: [
    AppService,
    MultiChoiceDropdownService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

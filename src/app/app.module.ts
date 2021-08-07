import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    FormsModule,
  ],
  providers: [
    AppService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

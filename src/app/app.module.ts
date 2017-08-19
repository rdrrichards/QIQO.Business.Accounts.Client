import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { AccountService, AddressService, CompanyService, EmployeeService,
    EntityAttributeService, FeeScheduleService, LoginService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    EmployeeComponent,
    AddressComponent,
    FeeScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule, MdCheckboxModule, MdGridListModule
  ],
  providers: [ AccountService, AddressService, CompanyService, EmployeeService,
    EntityAttributeService, FeeScheduleService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

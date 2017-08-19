import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account/account-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddressComponent } from './address/address.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import {
  AccountService, AddressService, CompanyService, EmployeeService,
  EntityAttributeService, FeeScheduleService, LoginService
} from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountComponent,
    EmployeeComponent,
    AddressComponent,
    FeeScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdButtonModule, MdCheckboxModule, MdGridListModule, MdListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'accounts', pathMatch: 'full' },
      { path: 'accounts', component: AccountListComponent },
      { path: 'accounts/:id', component: AccountListComponent },
      // { path: 'accounts/:id/edit', component: AccountComponent },
      { path: '**', redirectTo: 'accounts' }
    ])

  ],
  providers: [AccountService, AddressService, CompanyService, EmployeeService,
    EntityAttributeService, FeeScheduleService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

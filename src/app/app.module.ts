import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatGridListModule, MatListModule, MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
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
    FeeScheduleComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatTableModule, MatPaginatorModule, MatGridListModule, MatListModule, MatCardModule,
    CdkTableModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      { path: 'companies', component: CompanyComponent },
      { path: 'companies/:id', component: AccountListComponent },
      // { path: 'accounts', component: AccountListComponent },
      { path: 'accounts/:id', component: AccountComponent },
      // { path: 'accounts/:id/edit', component: AccountComponent },
      { path: '**', redirectTo: 'companies' }
    ])

  ],
  providers: [AccountService, AddressService, CompanyService, EmployeeService,
    EntityAttributeService, FeeScheduleService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

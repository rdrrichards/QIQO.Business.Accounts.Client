import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
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
    MatTableModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatListModule, MatCardModule,
    CdkTableModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'companies', pathMatch: 'full' },
    { path: 'companies', component: CompanyComponent },
    { path: 'companies/:id', component: AccountListComponent },
    // { path: 'accounts', component: AccountListComponent },
    { path: 'accounts/:id', component: AccountComponent },
    // { path: 'accounts/:id/edit', component: AccountComponent },
    { path: '**', redirectTo: 'companies' }
], {})

  ],
  providers: [AccountService, AddressService, CompanyService, EmployeeService,
    EntityAttributeService, FeeScheduleService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material';

import { IAccountViewModel } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs/Subscription';
import { AccountDataSource } from './account.datasource';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
    accounts: IAccountViewModel[] = [];
    paramSubscription: Subscription;
    dataSource: AccountDataSource | null;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ['account.accountCode', 'account.accountName', 'account.accountDesc'];

    constructor(private accountService: AccountService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // console.log('AccountListComponent:ngOnInit');
        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const companyId = +params['id'];
            this.accountService.getAccountsByCompany(companyId)
                .subscribe(
                  accounts => this.accounts = accounts.result,
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      console.log('An error occurred:', err.error.message);
                    } else {
                      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                    }
                  }
                );
            this.dataSource = new AccountDataSource(this.accountService, companyId, this.paginator);
        }
        );
    }

    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

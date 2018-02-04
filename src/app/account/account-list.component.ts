import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { IAccountViewModel } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
    accounts: IAccountViewModel[] = [];
    paramSubscription: Subscription;
    dataSource: MatTableDataSource<IAccountViewModel>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['account.accountCode', 'account.accountName', 'account.accountDesc'];

    constructor(private accountService: AccountService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // console.log('AccountListComponent:ngOnInit');
        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const companyId = +params['id'];
            this.accountService.getAccountsByCompany(companyId)
                .subscribe(
                  accounts => {
                    this.accounts = accounts.result;
                    this.dataSource = new MatTableDataSource(this.accounts);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      console.log('An error occurred:', err.error.message);
                    } else {
                      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
                    }
                  }
                );
          }
        );
    }
    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

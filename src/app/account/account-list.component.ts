import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

import { IAccount } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements AfterViewInit, OnDestroy {
    accounts: IAccount[] = [];
    paramSubscription: Subscription;
    dataSource: MatTableDataSource<IAccount>;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    displayedColumns = ['account.accountCode', 'account.accountName', 'account.accountDesc'];
    constructor(private accountService: AccountService,
        private activatedRoute: ActivatedRoute) { }

    ngAfterViewInit() {
        // console.log('AccountListComponent:ngOnInit');
        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const companyId = +params['id'];
            this.accountService.getAccountsByCompany(companyId)
                .subscribe(
                  accounts => {
                    // const accts = accounts.map(a => new AccountViewModel(a));
                    this.accounts = accounts;
                    this.dataSource = new MatTableDataSource(this.accounts);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    // console.log('accts', accts);
                    console.log('this.accounts', this.accounts);
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

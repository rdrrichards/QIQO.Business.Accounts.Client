import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { IAccount, IAccountViewModel } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
    accounts: IAccountViewModel[] = [];
    paramSubscription: Subscription;
    dataSource: AccountDataSource | null;
    @ViewChild(MdPaginator) paginator: MdPaginator;
    displayedColumns = ['account.accountKey', 'account.accountCode', 'account.accountName', 'account.accountDesc'];

    constructor(private accountService: AccountService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        // console.log('AccountListComponent:ngOnInit');
        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const companyId = +params['id'];
            this.accountService.getAccountsByCompany(companyId)
                .subscribe(accounts => this.accounts = accounts);
            this.dataSource = new AccountDataSource(this.accountService, companyId, this.paginator);
        }
        );
        // console.log(JSON.stringify(this.dataSource.connect()));
    }

    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

export class AccountDataSource extends DataSource<any> {
    constructor(private accountService: AccountService,
        private companyId: number,
        private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<IAccountViewModel[]> {
        const displayDataChanges = [
            this.accountService.dataChange,
            this._paginator.page,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.accountService.data.slice();

            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        });
    }

    disconnect() { }
}

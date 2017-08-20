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
import { AccountDataSource } from './account.datasource';

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
    }

    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

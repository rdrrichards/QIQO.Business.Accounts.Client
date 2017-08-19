import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
    accounts: IAccount[] = [];
    paramSubscription: Subscription;

    constructor(private accountService: AccountService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log('AccountListComponent:ngOnInit');
        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const companyId = +params['id'];
            this.accountService.getAccountsByCompany(companyId)
                .subscribe(accounts => this.accounts = accounts);
        }
        );
    }

    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

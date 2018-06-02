import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from '../models/account';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: IAccount;
  paramSubscription: Subscription;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute
  ) {
    // console.log('AccountComponent:constructor');
  }

  ngOnInit() {
    // console.log('AccountComponent:ngOnInit');
    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
      const accountId = +params['id'];
      this.accountService
        .getAccount(accountId)
        .subscribe(account => {
          this.account = account;
          console.log('this.account', this.account);
        });
    });
  }
  goBack() {
    window.history.back();
  }
}

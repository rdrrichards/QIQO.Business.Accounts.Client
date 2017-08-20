import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAccount, IAccountViewModel } from '../models/account';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<IAccountViewModel[]> {
    // console.log('AccountService:getAccountsByCompany');
    return this.httpClient.get<IAccountViewModel[]>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).map(
      response => response
    );
  }

  getAccount(accountId: number): Observable<IAccountViewModel> {
    // console.log('AccountService:getAccount');
    return this.httpClient.get<IAccountViewModel>(`${CONFIG.baseUrls.accounts}/${accountId}`).map(
      response => response
    );
  }
}

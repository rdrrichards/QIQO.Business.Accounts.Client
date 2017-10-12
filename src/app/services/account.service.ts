import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IAccountViewModel } from '../models/account';

@Injectable()
export class AccountService {
  dataChange: BehaviorSubject<IAccountViewModel[]> = new BehaviorSubject<IAccountViewModel[]>([]);
  get data(): IAccountViewModel[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<IAccountViewModel[]> {
    // console.log('AccountService:getAccountsByCompany');
    return this.httpClient.get<IAccountViewModel[]>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).map(
      response => {
        this.dataChange.next(response);
        return response;
      }
    );
  }

  getAccount(accountId: number): Observable<IAccountViewModel> {
    // console.log('AccountService:getAccount');
    return this.httpClient.get<IAccountViewModel>(`${CONFIG.baseUrls.accounts}/${accountId}`).map(
      response => response
    );
  }
}

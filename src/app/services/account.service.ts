import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAccount } from '../models/account';

@Injectable()
export class AccountService {
  dataChange: BehaviorSubject<IAccount[]> = new BehaviorSubject<IAccount[]>([]);
  get data(): IAccount[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<IAccount[]> {
    // console.log('AccountService:getAccountsByCompany');
    return this.httpClient.get<IAccount[]>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).pipe(
      map(response => {
        // const avm = response.map(a => new AccountViewModel(a));
        this.dataChange.next(response);
        return response;
      })
    );
  }

  getAccount(accountId: number): Observable<IAccount> {
    // console.log('AccountService:getAccount');
    return this.httpClient.get<IAccount>(`${CONFIG.baseUrls.accounts}/${accountId}`).pipe(
      response => response
    );
  }
}

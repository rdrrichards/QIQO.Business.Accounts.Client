import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAccountViewModel } from '../models/account';
import { ApiResponse } from '../models/response';

@Injectable()
export class AccountService {
  dataChange: BehaviorSubject<IAccountViewModel[]> = new BehaviorSubject<IAccountViewModel[]>([]);
  get data(): IAccountViewModel[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<ApiResponse> {
    // console.log('AccountService:getAccountsByCompany');
    return this.httpClient.get<ApiResponse>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).pipe(
      map(response => {
        this.dataChange.next(response.result);
        return response;
      })
    );
  }

  getAccount(accountId: number): Observable<ApiResponse> {
    // console.log('AccountService:getAccount');
    return this.httpClient.get<ApiResponse>(`${CONFIG.baseUrls.accounts}/${accountId}`).pipe(
      response => response
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IAccountViewModel } from '../models/account';
import { QIQOResponse } from '../models/response';

@Injectable()
export class AccountService {
  dataChange: BehaviorSubject<IAccountViewModel[]> = new BehaviorSubject<IAccountViewModel[]>([]);
  get data(): IAccountViewModel[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<QIQOResponse> {
    // console.log('AccountService:getAccountsByCompany');
    return this.httpClient.get<QIQOResponse>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).map(
      response => {
        this.dataChange.next(response.result);
        return response;
      }
    );
  }

  getAccount(accountId: number): Observable<QIQOResponse> {
    // console.log('AccountService:getAccount');
    return this.httpClient.get<QIQOResponse>(`${CONFIG.baseUrls.accounts}/${accountId}`).map(
      response => response
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAccount } from '../models/account';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccountsByCompany(companyId: number): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(`${CONFIG.baseUrls.companies}/${companyId}/accounts`).map(
      response => response
    );
  }
}

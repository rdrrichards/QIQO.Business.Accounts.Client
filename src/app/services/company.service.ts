import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ApiResponse } from '../models/response';

@Injectable()
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(`${CONFIG.baseUrls.companies}`).map(
      response => response
    );
  }

}

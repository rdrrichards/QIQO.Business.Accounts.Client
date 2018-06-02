import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../common/config';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { ICompany } from '../models/company';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

// import { ApiResponse } from '../models/response';

@Injectable()
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<ICompany[]> {
    return this.httpClient.get<ICompany[]>(`${CONFIG.baseUrls.companies}`).pipe(
      response => response
    );
  }

}

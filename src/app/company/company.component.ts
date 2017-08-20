import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services';
import { ICompany } from '../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(
      companies => this.companies = companies
    );
  }

}

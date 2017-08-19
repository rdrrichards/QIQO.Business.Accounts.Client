import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services';
import { ICompany } from './models/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QIQO Business Account Client';
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(
      companies => this.companies = companies
    );
  }
}

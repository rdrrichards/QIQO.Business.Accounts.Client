import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterOutletStubComponent } from './testing/router-stubs.spec';
import { CompanyService } from './services/company.service';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('AppComponent', () => {
  const companyService = new CompanyService(
    new HttpClient(
      { handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
                  return of(<HttpEvent<any>>{});
                  }
      }));
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, RouterOutletStubComponent ],
        providers: [ { provide: CompanyService, useValue: companyService } ]
      }).compileComponents();
      // const spay = spyOn(companyService, 'getAllCompanies').and.callThrough(); // (Observable.of([]));
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('QIQO Business Account Client');
    })
  );

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'Account Client'
      );
    })
  );
});

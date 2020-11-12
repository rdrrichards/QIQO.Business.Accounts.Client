import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeeScheduleComponent } from './fee-schedule.component';

describe('FeeScheduleComponent', () => {
  let component: FeeScheduleComponent;
  let fixture: ComponentFixture<FeeScheduleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

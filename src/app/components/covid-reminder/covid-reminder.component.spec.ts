import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReminderComponent } from './covid-reminder.component';

describe('CovidReminderComponent', () => {
  let component: CovidReminderComponent;
  let fixture: ComponentFixture<CovidReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

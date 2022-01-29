import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReminderDialogComponent } from './covid-reminder-dialog.component';

describe('CovidReminderDialogComponent', () => {
  let component: CovidReminderDialogComponent;
  let fixture: ComponentFixture<CovidReminderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidReminderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReminderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

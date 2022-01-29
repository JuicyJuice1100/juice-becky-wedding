import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CovidReminderDialogComponent } from '../covid-reminder-dialog/covid-reminder-dialog.component';
import { NavbarComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-covid-reminder',
  templateUrl: './covid-reminder.component.html',
  styleUrls: ['./covid-reminder.component.scss']
})
export class CovidReminderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CovidReminderDialogComponent, { 
      disableClose: true,
      backdropClass: 'backdrop'
    });
  }

  ngOnInit(): void {
    this.openDialog();
  }
}

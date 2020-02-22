import { Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideHamburgerButton = false;
  constructor() { }

  ngOnInit(): void {

  }
}

import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('navBar') public navBar: any;

  constructor(public sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.navBar = this.navBar;
  }
}

import { Component, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideHamburgerButton = false;
  constructor(public sideNavService: SidenavService) { }

  ngOnInit(): void {

  }

  toggleNav() {
    this.toggleHamburgerButton();
    this.sideNavService.navBar.toggle();
  }

  toggleHamburgerButton() {
    this.hideHamburgerButton = !this.hideHamburgerButton;
  }
}

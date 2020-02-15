import { Component, OnInit, Output } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public sideNavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.sideNavService.navBar.toggle();
  }
}

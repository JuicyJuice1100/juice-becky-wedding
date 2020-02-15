import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('navBar', {static: false}) public navBar: any;

  constructor(public sidenavService: SidenavService) {
    this.sidenavService.navBar = this.navBar;
    console.log(this.navBar);
  }

  ngOnInit(): void {

  }
}

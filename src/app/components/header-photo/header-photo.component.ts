import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-photo',
  templateUrl: './header-photo.component.html',
  styleUrls: ['./header-photo.component.scss']
})
export class HeaderPhotoComponent implements OnInit {
  headerPhoto = '../assets/images/header/header.JPEG';
  constructor() { }

  ngOnInit(): void {
  }

}

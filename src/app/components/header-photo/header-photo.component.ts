import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-photo',
  templateUrl: './header-photo.component.html',
  styleUrls: ['./header-photo.component.scss']
})
export class HeaderPhotoComponent implements OnInit {
  headerPhoto = 'https://i.picsum.photos/id/924/2000/1000.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

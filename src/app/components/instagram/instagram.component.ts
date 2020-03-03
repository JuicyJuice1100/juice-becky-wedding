import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  instagramLink = 'https://www.instagram.com/explore/tags/mrmeeseeks/';
  instagramPhoto = {
    img: 'https://picsum.photos/400/600',
    alt: 'photo'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

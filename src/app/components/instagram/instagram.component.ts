import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  instagramData = {
    appLink: 'https://www.instagram.com/explore/tags/BJWedding2022/?hl=en',
    hashtag: '#BJWedding2022',
    img: '../assets/images/photoShare/Webp.net-resizeimage.png',
    alt: 'photo',
    profileLink: 'https://www.instagram.com/bj.wedding.2022/?hl=en',
    username: 'bj.wedding.2022'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

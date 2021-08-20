import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  theGuestData = {
    appLink: 'https://www.theknot.com/photo-sharing-app/',
    eventLink: 'http:///in.veri.com/to/bjwedding2022',
    img: '../assets/images/photoShare/Webp.net-resizeimage.png',
    alt: 'photo'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map(n => ({
    src: `https://picsum.photos/id/${n}/500/300`,
    description: `description`
  }));

  carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor() {}

  ngOnInit(): void {}

  onMoveFn(data: NguCarouselStore) {
    console.log(data);
  }

  carouselLoad(evt: any) {
    const len = this.images.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.images.push(this.images[i % len]);
      }
    }
  }
}

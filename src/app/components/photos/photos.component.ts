import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})

export class PhotosComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map(n => ({
    src: `https://picsum.photos/id/${n}/500/300`,
    description: `description`
  }));

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    dots: true,
    infinite: true,
    accessibility: true,
    focusOnSelect: true,
    useTransform: true,
    adaptiveHeight: true,
    mobileFirst: true
  };

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.slideConfig.slidesToShow = 1;
      }
    });
  }

  ngOnInit() {

  }
}

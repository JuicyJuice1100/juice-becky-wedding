import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})

export class PhotosComponent implements OnInit {

  //TODO: images should be our engagement photos
  //TODO: Create service for getting photos
  // images = [62, 83, 466, 965, 982, 1043, 738].map(n => ({
  //   src: `https://picsum.photos/id/${n}/500/300`,
  //   description: `description`
  // }));

  images = []

  slideConfig = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    accessibility: true,
    focusOnSelect: true,
    useTransform: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  getEngagementPhotos(): void {
    this.images = this.imageService.getEngagementImages();
  }

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getEngagementPhotos();
  }
}

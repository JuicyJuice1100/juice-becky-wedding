import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party-carousel',
  templateUrl: './wedding-party-carousel.component.html',
  styleUrls: ['./wedding-party-carousel.component.scss']
})
export class WeddingPartyCarouselComponent implements OnInit {
  groomsmen = [
    {
      name: 'Brenton Wienkes',
      role: 'Best Man',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Pete Abraham',
      role: 'Groomsman',
      image: 'https://picsum.photos/200/200'
    },    
    {
      name: 'Mitch Ladwig',
      role: 'Groomsman',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Michelle Mills',
      role: 'Groomswoman',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Jared Putz',
      role: 'Groomsman',
      image: 'https://picsum.photos/200/200'
    }
  ];

  bridesmaids = [
    {
      name: 'Megan Schmitz',
      role: 'Maid of Honor',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Grace Broadnax',
      role: 'Bridesmaid',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Jackie Espiritu',
      role: 'Bridesmaid',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Emily Petersen',
      role: 'Bridesmaid',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Ashley Trad',
      role: 'Bridesmaid',
      image: 'https://picsum.photos/200/200'
    },
  ];

  other = [
    {
      name: 'Arthur D\'Amato',
      role: 'Officiant',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Tayler Phillips',
      role: 'DJ',
      image: 'https://picsum.photos/200/200'
    },
    {
      name: 'Zazu',
      role: 'Bird of Honor',
      image: 'https://picsum.photos/200/200'
    }
  ];

  slideConfig = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 4000
        }
      }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}

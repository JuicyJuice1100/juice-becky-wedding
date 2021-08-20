import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {
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
      name: 'Emily Pertersen',
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

  constructor() { }

  ngOnInit(): void {
  }

}

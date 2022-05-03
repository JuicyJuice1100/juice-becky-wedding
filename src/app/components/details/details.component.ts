import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cards = [
    {
      title: 'Wedding Rehearsal',
      day: 'Friday, May 13',
      time: '@ 16:30',
      location: 'Milwaukee Public Museum',
      address: '800 W Wells St, Milwaukee, WI 53233',
      notes: '*Bridal Party Only*'
    },
    {
      title: 'Rehearsal Dinner',
      day: 'Friday, May 13',
      time: '@ 18:00',
      location: 'Rodizio Grill',
      address: '777 N Water St, Milwaukee, WI 53202',
      notes: '*Invitation Only*',
    },
    {
      title: 'Ceremony & Reception',
      day: 'Saturday, May 14',
      time: '@ 18:00',
      location: 'Milwaukee Public Museum',
      address: '800 W Wells St, Milwaukee, WI 53233',
      notes: 'Doors Open @17:30'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

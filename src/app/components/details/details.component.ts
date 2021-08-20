import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cards = [
    {
      title: 'Rehearsal Dinner',
      day: 'Friday, May 13',
      time: 'TBA',
      location: '',
      address: ""
    },
    {
      title: 'Ceremony & Reception',
      day: 'Saturday, May 14',
      time: '@ 18:00',
      location: 'Milwaukee Public Museum',
      address: "800 W Wells St, Milwaukee, WI 53233"
    },
    {
      title: 'Brunch',
      day: 'Sunday, May 15',
      time: 'TBA',
      location: '',
      address: ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

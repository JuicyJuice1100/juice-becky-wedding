import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  cards = [
    {
      title: 'Saint Kate',
      url: 'https://res.saintkatearts.com/ibe/details.aspx?propertyid=16098&nights=2&checkin=05/13/2022&group=051422SEWB',
      address: "139 E Kilbourn Ave, Milwaukee, WI 53202",
      color: "primary"
    },
    {
      title: 'Homewood Suites',
      //TODO: Get homewood link
      url: '<INSERT LINK HERE>',
      address: "500 N. Water Street, Milwaukee, WI 53202",
      color: "accent"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

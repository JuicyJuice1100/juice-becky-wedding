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
      address: "139 E Kilbourn Ave, Milwaukee, WI 53202"
    },
    {
      title: 'Brewhouse Inn & Suites',
      //TODO: Get brewhouse link
      url: 'https://www.brewhousesuites.com/',
      address: "1215 N 10th St, Milwaukee, WI 53205"
    },
    {
      title: 'Homewood Suites',
      //TODO: Get homewood link
      url: 'https://www.hilton.com/en/homewood/',
      address: "500 N. Water Street, Milwaukee, WI 53202"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  cards = [
    {
      title: 'Insert Food',
      url: '',
      address: "Insert Address"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

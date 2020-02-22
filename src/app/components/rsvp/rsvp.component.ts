import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  hasPlusOne = false;
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('submitted');
  }
}

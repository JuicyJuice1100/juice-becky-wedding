import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  // hasPlusOne = false;
  people = [

  ];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('submitted');
  }

  addPerson(){
    this.people.push({
      fullName: ''
    });
  }

  removePerson(i: number) {
    this.people.splice(i, 1);
  }
}

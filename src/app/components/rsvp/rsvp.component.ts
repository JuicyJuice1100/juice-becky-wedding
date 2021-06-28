import { Component, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';
import { Rsvp } from 'src/app/models/models';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  // hasPlusOne = false;
  guests: FormArray;

  rsvpForm = this.formBuilder.group({
    email: '',
    name: '',
    foodRestrictions: '',
    inviteCode: '',
    guests: this.formBuilder.array([])
  });


  constructor(private rsvpService: RsvpService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    
  }

  addGuest(){
    this.guests = this.rsvpForm.get('guests') as FormArray;
    this.guests.push(this.createGuest());
  }

  removeGuest(i: number) {
    this.guests = this.rsvpForm.get('guests') as FormArray;
    this.guests.removeAt(i);
  }

  createGuest() {
    return this.formBuilder.group({
      guestName: new FormControl(null),
      guestFoodRestrictions: new FormControl(null)
    });
  }
}

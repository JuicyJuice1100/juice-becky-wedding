import { Component, Input, OnInit } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp/rsvp.service';
import { Rsvp, Guest } from 'src/app/models/models';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

const resolvedPromise = Promise.resolve(null);

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  @Input() rsvpForm = this.formBuilder.group({
    email: '',
    name: '',
    foodRestrictions: '',
    inviteCode: '',
    guests: this.formBuilder.array([])
  });

  showRsvpError = false;


  constructor(private rsvpService: RsvpService,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const rsvp: Rsvp = {
      email: this.rsvpForm.controls['email'].value,
      name: this.rsvpForm.controls['name'].value,
      foodRestrictions: this.rsvpForm.controls['foodRestrictions'].value,
      invitationId: this.rsvpForm.controls['inviteCode'].value,
      guests: (this.rsvpForm.get('guests') as FormArray).getRawValue().map(q => {
        const guest: Guest = {
          name: q.guestName,
          foodRestrictions: q.guestFoodRestrictions
        }
        return guest;
      })
    };

    this.showRsvpError = this.rsvpService.createdRsvp(rsvp)
  }

  addGuest(){
    const guests = this.rsvpForm.get('guests') as FormArray;
    guests.push(this.createGuest());

    this.ref.detectChanges();
  }

  removeGuest(i: number) {
    const guests = this.rsvpForm.get('guests') as FormArray;
    guests.removeAt(i);
  }

  createGuest() {
    return this.formBuilder.group({
      guestName: new FormControl(null),
      guestFoodRestrictions: new FormControl(null)
    });
  }
}

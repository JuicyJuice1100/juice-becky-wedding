import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Invitation, Rsvp } from '../../models/models';
import { filter } from 'rxjs/operators'
import { of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  // invitationsRef: AngularFireList<Invitation>
  // invitations: Observable<Invitation[]>
  // subject = new Subject<Invitation>();

  createRsvp(rsvp: Rsvp)
  {
    const ref = this.db.object(`rsvps/${rsvp.name}${rsvp.invitationId}`);

    ref.set(rsvp);
  }

  updateRsvp(rsvp: Rsvp){
    const ref = this.db.object(`rsvps/${rsvp.name}${rsvp.invitationId}`);

    ref.update(rsvp);

    return true;
  }

  getInvitation(rsvp: Rsvp){
    return this.db.object<Invitation>(`invitations/${rsvp.invitationId}`).valueChanges();
  }

  // getInvitation(rsvp: Rsvp){
  //   return this.subject.pipe(filter(
  //     ((invite: Invitation) => invite.id === rsvp.invitationId && invite.name.toLowerCase() === rsvp.name.toLowerCase())
  //   ))
  // }

  // validateRsvp(rsvp: Rsvp){
  //   // const invitationRef = this.db.object<Invitation>(`invitations`).valueChanges();
  //   let isValidRsvp = false;

  //   // this.invitationsRef.forEach((invite: Invitation) => {
  //   //   this.subject.next(invite)
  //   // });
    
  //   // const invitation = this.getInvitation(rsvp).subscribe(
  //   //   q => { 
  //   //     isValidRsvp = q.name.toLowerCase() === rsvp.name.toLowerCase()
  //   //   }
  //   // );    

  //   this.getInvitation(rsvp)
  //   return isValidRsvp;
  // }



  constructor(private db: AngularFireDatabase) {
    // this.invitationsRef = db.list('invitations');
    // this.invitations = this.invitationsRef.valueChanges()

    // this.invitations.subscribe(action => action.forEach((invite: Invitation) => {
    //   this.subject.next(invite);
    // }))
  }
}

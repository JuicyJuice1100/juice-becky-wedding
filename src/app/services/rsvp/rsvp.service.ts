import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invitation, Rsvp } from '../../models/models';
import { map, switchMap, combineAll, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  rsvpsCollection: AngularFirestoreCollection<Rsvp>;
  rsvps: Observable<Rsvp[]>;
  rsvpDoc: AngularFirestoreDocument<Rsvp>;

  invitationsCollection: AngularFirestoreCollection<Invitation>;
  invitations: Observable<Invitation[]>;
  invitationDoc: AngularFirestoreDocument<Invitation>;

  getRsvpByInvitationId(invitationId: String){
    return this.rsvps.pipe(
      map(actions => actions.find(rsvp => rsvp.invitationId == invitationId))
    );
  }

  getInvitationByIdandName(id: String, name: String){
    return this.invitations.pipe(
      map(actions => actions.find(invitation => invitation.id == id && invitation.name == name))
    );
  }

  updateRsvp(rsvp: Rsvp){
    this.rsvpDoc.update(rsvp);
  }

  addRsvp(rsvp: Rsvp){
    const id = this.firestore.createId();
    this.rsvpsCollection.doc(id).set(rsvp);
  }

  createdRsvp(rsvp: Rsvp)
  {
    let invitation = this.getInvitationByIdandName(rsvp.invitationId, rsvp.name);
    if(invitation){
      let rsvpItem = this.getRsvpByInvitationId(rsvp.invitationId);
      if(rsvpItem){
        this.updateRsvp(rsvp);
      } else {
        this.addRsvp(rsvp);
      }
      return true;
    }
    return false;
  }

  constructor(private firestore: AngularFirestore) {
    this.rsvpsCollection = firestore.collection<Rsvp>('rsvps');
    this.rsvps = this.rsvpsCollection.valueChanges();

    this.invitationsCollection = firestore.collection<Invitation>('invitations');
    this.invitations = this.invitationsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Invitation;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
}

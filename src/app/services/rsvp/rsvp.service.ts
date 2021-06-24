import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Rsvp } from '../../models/models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  rsvpsCollection: AngularFirestoreCollection<Rsvp>;
  rsvps: Observable<Rsvp[]>;
  rsvpDoc: AngularFirestoreDocument<Rsvp>;

  addRsvp(rsvp){
    this.rsvpsCollection.add(rsvp);
  }

  getRsvps() {
    return this.rsvps;
  }

  updateRsvp(rsvp){
    this.rsvpDoc.update(rsvp);
  }

  constructor(public firestore: AngularFirestore) {
    this.rsvpsCollection = this.firestore.collection('rsvps');
    this.rsvps = this.rsvpsCollection.snapshotChanges().pipe(
      map(a => 
        a.map(b => 
          b.payload.doc.data() as Rsvp
      ))
    )
  }
}

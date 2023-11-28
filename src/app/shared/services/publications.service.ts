import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication.interface';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  constructor(private firestore: Firestore) {}

  addPublication(place: Publication) {
    const placeRef = collection(this.firestore, 'publication');
    return addDoc(placeRef, place);
  }

  getPublication(): Observable<Publication[]> {
    const placeRef = collection(this.firestore, 'publication');
    return collectionData(placeRef, { idField: 'id' }) as Observable<
      Publication[]
    >;
  }

  updatePublication(place: Publication) {
    const placeDocRef = doc(this.firestore, `publication/${place.id}`);
    return updateDoc(placeDocRef, { ...place });
  }

  deletePublication(place: Publication) {
    const placeDocRef = doc(this.firestore, `publication/${place.id}`);
    return deleteDoc(placeDocRef);
  }
}

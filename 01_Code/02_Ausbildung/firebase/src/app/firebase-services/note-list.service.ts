import { Injectable, Inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
// @Input note: Note;
export class NoteListService {
  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  unsubTrash;
  unsubNotes;

  firestore: Firestore = Inject(Firestore);

  constructor() {
    this.unsubNotes = this.subNotesList();
    this.unsubTrash = this.subTrashList();
  }

  ngOnDestroy() {
    this.unsubNotes();
    this.unsubTrash();
  }

  subTrashList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.trashNotes = [];
      list.forEach((element) => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  subNotesList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.normalNotes = [];
      list.forEach((element) => {
        this.normalNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  setNoteObject(obj: any, id: string): Note {
    return {
      id: id,
      type: obj.type || 'note',
      // wenn es eine obj.type gibt, wird die geschrieben, wenn nicht ein leerer String
      title: obj.type || '',
      content: obj.content || '',
      marked: obj.marked || false,
    };
  }

  // const itemCollection = collection(this.firestore, 'items');
  getNotesRef() {
    return collection(this.firestore, 'notes');
    // gibt ein "Referenz-Objekt" auf die notes-Sammlung von Firestore zurück
    // damit kann man die Daten abfragen, was hinzufügen oder löschen
    // notes ist der Name/ die ID der Sammlung
    // this.firestore ist die Datenbank
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colID: string, docID: string) {
    return doc(collection(this.firestore, colID), docID);
    // hier referziere ich auf die Daten, die ich in der Sammlung notes besitze
    // Die colID ist der Name der Sammlung
    // in console.firebase.google.com sieht man die docID
  }
}

import { Injectable } from '@angular/core';
import { Note } from './cards/Note';
import { NOTES } from './cards/Mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  id:number = 1;

  constructor() { }

  editNote_ogText(id: Number|undefined) :string{
    let note:Note|undefined= NOTES.find(element => element.id===id);
    if(typeof(note) != 'undefined'){
      let ogText = note.text;
      this.id = note.id;
      return ogText;
    }else{
      return 'undefined';
    }
  }

  getOgText(){
    return NOTES[this.id-1].text;
  }

  editNote_content(content:string, city:string, date:string, time:string){
    NOTES[this.id-1].text = content;
    NOTES[this.id-1].city = city;
    NOTES[this.id-1].date = date;
    NOTES[this.id-1].time = time;
  }

  addNote(content: string, city: string, date: string, time: string){
    NOTES.push({id: NOTES.length+1, city: city, date: date, time: time, text: content});
  }

  deleteNote_id (id: number){
    this.id = id;
  }
  
  deleteNote(){
    let index = NOTES.findIndex(element => element.id===this.id);
    if(index != -1){
      NOTES.splice(index,1);
    }
    if(NOTES.length > 0){
      NOTES.forEach(element => {
        element.id = element.id-1;
      });
    }
  }

  
}

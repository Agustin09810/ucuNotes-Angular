import { Injectable } from '@angular/core';
import { Note } from './cards/Note';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private cardsUrl = 'http://localhost:3000/api/v1/notes';  // URL to web api
  private httpOptions  = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.cardsUrl, this.httpOptions);
  }

  getNoteById(id: string): Observable<Note> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<Note>(url, this.httpOptions);
  } 

  editNote(note : Note){
    const url = `${this.cardsUrl}/${note.id}`;
    return this.http.put<Note>(url, note, this.httpOptions);
  }

  addNote(text: string, city_id: string, date: string, hour: string, temp : string) {
    return this.http.post<Note>(this.cardsUrl, 
      { text : text, 
      city_id : city_id, 
      date : date, 
      hour : hour, 
      temp: temp},
      this.httpOptions);
  }

  
  deleteNote(id: string){
    const url = `${this.cardsUrl}/${id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }

  
}

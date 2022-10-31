import { Component } from '@angular/core';
import {Note} from './cards/Note';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  edit = "modal-editar"
  noteParent? : Note[];
  title='ucuNotes';
  ngOnInit(): void {
    this.getNotes();
  }

  constructor(private modalService: NgbModal, private noteService : NotesService) {
    //this.getNotes()
  }

  public getNotes(){
    this.noteService.getNotes().subscribe(notes => this.noteParent = Object.values(notes))
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  

  
}

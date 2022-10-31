import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../cards/Note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() public note? : Note;

  constructor(
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
  }

  deleteNote(){
    if(this.note)
    this.notesService.deleteNote(this.note._id);
  }
}

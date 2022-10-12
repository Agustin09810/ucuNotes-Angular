import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
  }

  deleteNote(){
    this.notesService.deleteNote();
  }
}

import { Component } from '@angular/core';
import {Note} from './cards/Note';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NOTES } from './cards/Mock-notes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  edit = "modal-editar"

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  noteParent : Note[] = NOTES;
  title='ucuNotes';

  
}

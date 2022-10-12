import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { TemperatureService } from '../temperature.service';
import { cities } from '../mockCities'
import { NOTES } from '../cards/Mock-notes';
import { NotesService } from '../notes.service';
import {CardsComponent} from '../cards/cards.component';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {
  @Input() id : string = "modal-agregar";
  ciudades : Array<string> = Object.keys(cities);
  textEdit: string = "";


  @ViewChild('textoAgregar') editText!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private notesService: NotesService,
  ) { }

  ngOnInit(): void {

  }

  addNote(content: string, city:string , date:string, time:string){
    this.notesService.addNote(content, city, date, time);
  }

  editNote(content:string, city:string, date:string, time:string){
    this.notesService.editNote_content(content, city, date, time);
  }

  getOgText(){
    this.textEdit = this.notesService.getOgText();
  }

  

}

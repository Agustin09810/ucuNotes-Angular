import { Component, Input, OnInit } from '@angular/core';
import {Note} from './Note';
import { TemperatureService } from '../temperature.service';
import { Observable, of } from 'rxjs';
import { NotesService} from '../notes.service';
import {AddEditModalComponent} from '../add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() note? :Note;
  temperature? : String;
  constructor(
    private tempService:TemperatureService,
    private notesService: NotesService
    ) { }
  
  async getTemperature(): Promise<string>{
    if (this.note)
    {
      this.temperature = await (this.tempService.getTemp(this.note?.time,this.note?.date,this.note?.city))
      return "ok"
    } 
    else
    {
      return "error";
    }
  }
  ngOnInit(): void {
    this.getTemperature();
  }

  editarNota(id: Number){
    this.notesService.editNote_ogText(id);
  }

  deleteNote_id(id: number){
    this.notesService.deleteNote_id(id);
  }

  

}

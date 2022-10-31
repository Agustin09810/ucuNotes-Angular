import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { NotesService } from '../notes.service';
import { CitiesService } from '../cities.service';
import { City } from '../City';
import { Note } from '../cards/Note';
import { TemperatureService } from '../temperature.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {
  @Input() id : string = "modal-agregar";
  @Input() note? : Note;
  ciudades? : City[]
  textEdit: string = "";
  


  @ViewChild('textoAgregar') editText!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private notesService: NotesService,
    private citiesService : CitiesService,
    private tempService : TemperatureService,
    private ui : AppComponent
  ) { }

  ngOnInit(): void {
    this.getCities();
    this.getNote();
  }

  getNote(){
    this.notesService.actualNoteData.subscribe(note => this.note = note);
  }

  getCities(){
    this.citiesService.getCities().subscribe(cities => this.ciudades = cities);
  }

  async addNote(content: string, city:string , date:string, time:string){
    let temp = await this.tempService.getTemp(time, date, city);
    this.notesService.addNote(content, city, date, time, temp).subscribe(() => this.ui.update());
  }

  async editNote(content:string, city:string, date:string, time:string){
    if(this.note)
    {
      let temp = await this.tempService.getTemp(time, date, city);
      this.note.text = content;
      this.note.city_id = city;
      this.note.date = date;
      this.note.hour = time;
      this.note.temp = temp;
      this.notesService.editNote(this.note).subscribe(() => this.ui.update());
    }
  }


  

}

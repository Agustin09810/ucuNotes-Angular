import { Component, Input, OnInit } from '@angular/core';
import { Note } from './Note';
import { TemperatureService } from '../temperature.service';
import { NotesService} from '../notes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditModalComponent } from '../add-edit-modal/add-edit-modal.component';
import { CitiesService } from '../cities.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() note? :Note;
  @Input() city? : string
  constructor(
    private tempService:TemperatureService,
    private notesService: NotesService,
    private citiesService : CitiesService,
    private modalService : NgbModal
    ) { }
  
  getCity(){
    if(this.note)
    this.citiesService.getCityById(this.note?.city_id).subscribe(city => this.city = city.name)
  }
  
  ngOnInit(): void {
    this.getCity();
  }

  editarNota(note : Note){
    this.notesService.editNote(note);
  }

  deleteNote_id(id: string){
    this.notesService.deleteNote(id);
  }

  openModalDelete(){
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.note = this.note;
  }

  openModalEdit(){
    const modalRef = this.modalService.open(AddEditModalComponent);
    modalRef.componentInstance.note = this.note;
  }

  changeActualNote(){
    if(this.note)
    this.notesService.changeActualNote(this.note);
  }
}

import { Component, OnInit } from '@angular/core';
import {Note} from './Note';
import {NOTES} from './Mock-notes'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
//  notes: NOTES[] = [];
  note: Note;
  constructor() {
    this.note = {'id':1, 'city':'Montevideo', 'temp':14, 'date':'07/09/2022', 'time':'12:00'};
  }
  

  ngOnInit(): void {
  }

}
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './cards/Note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let cards = [
      {'id':1, 'city':'Berlin', 'date':'2022-09-13', 'time':'12:00', 'text':'Ejemplo 1: Generado Automaticamente'},
      {'id':2, 'city':'Montevideo', 'date':'2022-09-13', 'time':'14:00', 'text':'Ejemplo 2 :Generado Automaticamente'}
    ];

    let cities: Record<string, Record<number, number>> = {
      "Montevideo" : [-34.8941,-56.0675],
      "Lima" : [-12.0931,-77.0465],
      "Santiago de Chile" :  [-33.4691,-70.6420],
      "Washington" : [38.8921,-77.0241],
      "Nueva York" : [40.71,-74.01],
      "Berlin" : [52.52,13.41],
      "Paris" : [48.8567,2.3510],
      "Londres" : [51.5002,-0.1262],
      "Madrid" : [40.4167,-3.7033],
      "Viena" : [48.2092, 16.3728]
  }
    return {cards, cities};
  }

  genId(cards: Note[]): number {
    return cards.length > 0 ? Math.max(...cards.map(Note => Note.id)) + 1 : 0;
  }

  constructor() { } 
}

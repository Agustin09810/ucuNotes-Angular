import { Injectable } from '@angular/core';
import { CitiesService } from './cities.service';
import { City } from './City';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private citiesService : CitiesService) { 
  }

  async getJSONFromFetch(latitude: number | string,longitude: number | string, day: string)
  {
	const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&start_date='+day+'&end_date='+day+'&hourly=temperature_2m');
    return await response.json();
  }

  getHourFromJSON(hour: number, json: any)
  {
    return json.hourly.temperature_2m[hour];
  }

  
  async getTemp(hour: string, date: string, id: string){
    const city = await lastValueFrom(this.citiesService.getCityById(id));
    if(!(city)){
        return "The specified city is not valid. Try again."; //TODO: throw correct HTTP error
    }
    else{
        let realHour: number = parseInt(hour);
        let lat: number = city.coord[0];
        let lon: number = city.coord[1];
        const JSON = await this.getJSONFromFetch(lat,lon,date);
        const temp: number = this.getHourFromJSON(realHour ,JSON);
        return temp.toString();
    }
  }
}

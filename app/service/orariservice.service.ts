import { Injectable } from '@angular/core';
import { Orarionegozio } from '../interface/orarionegozio';

@Injectable({
  providedIn: 'root'
})
export class OrariserviceService {

  constructor() { }

  orari : Orarionegozio[] =
  [
    {
      ora:"9:00-18:00",
      giorno:"lunedi"
    },
    {
      ora:"chiuso",
      giorno:"martedi"
    },
    {
      ora:"9:00-18:00",
      giorno:"marcoledi"
    },
    {
      ora:"9:00-18:00",
      giorno:"giovedi"
    },
    {
      ora:"9:00-19:00",
      giorno:"venerdi"
    },
  ]


  getOrari(){
    return this.orari
  }

}

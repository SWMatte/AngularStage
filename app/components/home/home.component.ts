import { Component, OnInit } from '@angular/core';
import { Orarionegozio } from 'src/app/interface/orarionegozio';
import { OrariserviceService } from 'src/app/service/orariservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private orari:OrariserviceService){}

  listaOrari:Orarionegozio[]=[]
  ngOnInit(): void {

    this.listaOrari= this.orari.getOrari()
  }




}

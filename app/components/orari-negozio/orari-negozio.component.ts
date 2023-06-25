import { Component, Input, OnInit } from '@angular/core';
import { Orarionegozio } from 'src/app/interface/orarionegozio';

@Component({
  selector: 'app-orari-negozio',
  templateUrl: './orari-negozio.component.html',
  styleUrls: ['./orari-negozio.component.css']
})
export class OrariNegozioComponent implements OnInit {

  @Input()
  orariNegozio: Orarionegozio[] = []


  ngOnInit(): void {

  }
}

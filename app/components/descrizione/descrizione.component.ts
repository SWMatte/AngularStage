import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from 'src/app/interface/products';
 import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-descrizione',
  templateUrl: './descrizione.component.html',
  styleUrls: ['./descrizione.component.css']
})
export class DescrizioneComponent implements OnInit{

  constructor( private route:ActivatedRoute,private menuService : ProductsService){}

products:any
id:number=0
  ngOnInit(): void {

    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.id=+param.get("id")!
      this.products=this.menuService.getProductById(this.id)
    })

  }



}

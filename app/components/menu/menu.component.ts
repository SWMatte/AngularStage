import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listProducts: Products[] =[]

  constructor(private menuService : ProductsService){

  }

  ngOnInit(): void {

    this.listProducts  = this.menuService.getAll();
   

   }


}

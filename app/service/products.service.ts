import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService   {
  products: Products[] = [];
  constructor() {
  this.products =
  [
    {
       name:"margherita",
       ingredients:"farina,pomodoro,mozzarella",
       price:2.5,
       available:false,
       quantita:0
    },
    {
      name:"patatine",
      ingredients:"farina,pomodoro,patatine,mozzarella",
      price:5,
      available:true,
      quantita:0

   },
   {
    name:"farinata",
    ingredients:"farina di ceci",
    price:7,
    available:true,
    quantita:0

 }
  ]
}

  getProductById(index:number){
    return this.products[index]

  }
  getAll(){
    return this.products
  }




}

import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-riepilogoordine',
  templateUrl: './riepilogoordine.component.html',
  styleUrls: ['./riepilogoordine.component.css']
})
export class RiepilogoordineComponent implements OnInit, DoCheck {

  constructor( private route:ActivatedRoute,private menuService : ProductsService){}


  products: Products = {} as Products;
  id:number=0
  price:number=0
  ordini:Products[]=[]
  totale:number=0

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.id=+param.get("id")!
      this.products=this.menuService.getProductById(this.id)
      this.ordini.push( this.products)
      this.price=this.products.price
    })
  }
  ngDoCheck(): void {


    this.totale=this.ordini.reduce((acc,elem)=> acc +elem.price,0)
    }
  removePizza(id :number){
    this.ordini.splice(id,1)
  }


}

/*FACCIO UN METODO CHE MI CERCHI SE NEL MIO ARRAY ORDINI è GIA PRESENTE IL PRODOTTO SELEZIONATO, SE è GIA PRESENTE FACCIO INCREMENTARE UN CONTATORE CHE MI VA A DEFINIRE LA QUANTITA' ACQUISTATA E POI LA MOLTIPLICO PER IL PREZZO
e QUINDI METTO UN (CLICK) SUL BOTTONE COMPRA , AD ESEMPIO SCHIACCIO SU FARINATA 1 VOLTA LA QTA SARA' 1 , SE LO RISCHIACCIO DIVENTA 2 E QUESTO MI VIENE MOLTIPLICATO PER IL SUO PREZZO

PERO' DEVO POI METTERE NEL REMOVEPIZZA() CHE SE VIENE SCATENATO QUESTO EVENTO IL CONTATORE SCENDE DI UN'UNITA' E QUINDI POI IL TOTALE SI AGGIORNA IN AUTOMATICO  */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DescrizioneComponent } from './components/descrizione/descrizione.component';
import { RiepilogoordineComponent } from './components/riepilogoordine/riepilogoordine.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu", component:MenuComponent,
  children:[
    {path:":id",component:DescrizioneComponent},
    {path:"riepilogo/:id", component:RiepilogoordineComponent}
  ]


}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }

import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

// get personajes():Personaje[]{
//   return this.dbzService.personajes;
// }

nuevo: Personaje = {
  nombre:'Trunks',
  poder: 12000
}

// agregarNuevoPersonaje( argumento: Personaje){
//   //this.personajes.push(argumento);
// }

constructor(private dbzService:DbzService){
}
  

}

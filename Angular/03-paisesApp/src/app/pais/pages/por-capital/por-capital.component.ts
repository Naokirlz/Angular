import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = 'Hola Mundo';
  hayError: boolean = false;
  paises : Country[] = [];
  
  constructor( private paisService:PaisService ) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    
    
    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
         
         console.log(paises);
         
         this.paises=paises;
         if(this.paises.length === 0){this.hayError = true;}

      }, (err) => {
         this.hayError = true;
         this.paises = [];
      });


  }

  sugerencias(termino:string){
    
    this.hayError=false;
    //TODO CREAR SUGERENCIAS
  }
}

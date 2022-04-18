import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk'];
  heroeBorrado :string = "";
  
  borrarHeroe(){
    
    //this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || "";
    //console.log(heroeBorrado);
        
  };

}

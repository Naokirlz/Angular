
/*
    ===== Código de TypeScript =====
*/

function sumar (a:number, b:number):number{
    //return (a + b).toString();
    return (a + b);
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number =2):number{
return numero * base * otroNumero;

}


//const resultado = multiplicar(5,1);
//console.log(resultado);


interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHP: ()=> void;
   
}


function curar(personaje: PersonajeLOR, curarX:number):void{

    personaje.pv += curarX; 
    console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Cristian',
    pv:50,
    mostrarHP() {
        console.log('puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje,50);

nuevoPersonaje.mostrarHP();
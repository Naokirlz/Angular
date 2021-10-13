
/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor ={
    volumen:90,
    segundo:36,
    cancion: 'Mess',
    detalles:{
        autor: 'ed sheeran',
        anio: 2015
    }
}

const {volumen:vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

//console.log('El volumen actual de: ', vol);
//console.log('El volumen actual de: ', segundo);
//console.log('El volumen actual de: ', cancion);
//console.log('El volumen actual de: ', autor);

const dbz:string[]= ['goku', 'vegeta', 'trunks'];
const [ p1, , p3 ]= dbz;


//console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 1: ', p3);
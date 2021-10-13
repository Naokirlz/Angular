
/*
    ===== Código de TypeScript =====
*/

//let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing'];
//habilidades.push('jaja');

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string[]
    puebloNatal?:string;
}



const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
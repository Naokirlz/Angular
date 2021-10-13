
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre:string, 
        public direccion:string
    )   {}
}

class Hero extends PersonaNormal {
     
     //alterEgo: string;
     //edad: number;
     //nombreReal:string;

     constructor(
         public alterEgo: string,
         public edad: number,
         public nombreReal: string
    )    {
         super(nombreReal, 'New York, Usa');
    }
}


const iroman = new Hero('iroman', 45, 'Tony');

console.log(iroman);
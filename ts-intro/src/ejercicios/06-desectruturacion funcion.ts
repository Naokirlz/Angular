
/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc:string;
    precio:number;
}

const telefono: Producto ={
    desc:'Nokia',
    precio:100
}

const tableta: Producto ={
    desc:'iPad',
    precio:1000
}


function calculaISV(productos:Producto[]):[number, number]{

    let total = 0;
    
    productos.forEach( ( {precio} ) => {
        total += precio;
    })

    return [total, total * 0.15];

}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV (articulos);

console.log ('TOTAL: ', total);
console.log ('ISV: ', isv);
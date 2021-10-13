import { calculaISV, Producto } from "./06-desectruturacion funcion";


/*
    ===== Código de TypeScript =====
*/
//import { Producto } from "./ejercicios/06-desectruturacion funcion";




const carritoCompras: Producto[] = [
    {
        desc: 'tel1',
        precio : 100
    },
    {
        desc: 'tel2',
        precio: 200
    }

];

const [total, isv] = calculaISV(carritoCompras);

console.log ('TOTAL: ', total);
console.log ('ISV: ', isv);
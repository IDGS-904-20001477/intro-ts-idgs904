function sumar(a : number, b : number) : void{
    console.log(a + b);
}

const reultado = sumar(2, 4);

function sumar2(n1 : number, n2 : number) : number{
    return n1 + n2;
}

console.log(sumar2(4, 8));


function multiplicar(n3 : number, n4 : number, n5 : number = 5) : number{
    let tem = 3 * n5;
    return tem;
}

console.log(multiplicar(8, 2, 2));

interface Mascotas{
    nombre : string;
    edad : number;
    mostrarEdad : () => void;
}

function datosMascota(mascota : Mascotas, x : number) : void{
    mascota.edad = x;
    console.log(mascota);
}

const nuevaMascota : Mascotas = {
    nombre: "Juan",
    edad: 0,
    mostrarEdad: function() {
        console.log('La edad es ', this.edad);
    }
}
datosMascota(nuevaMascota, 12);

let funcSuma = function(n1 : number, n2 : number) : number{
    return n1 + n2;
}

console.log(funcSuma(4,8));

function suma3(...valores : number[]){
    return valores.reduce((total, valor) => total + valor, 0);
}
console.log(suma3(1,2,3));
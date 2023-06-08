interface Alumno{
    matricula? : number;
    nombre : string;
    email : string;
    edad : number;
}

const alumnos : Alumno = {
    nombre : 'Mario',
    edad : 20,
    email : 'mario@gmail.com',
    matricula : 0
}

let vector1 : Array<number> = [9, 8, 7, 6, 5];
vector1.push(34);
for(let elemento of vector1)
    console.log(elemento);
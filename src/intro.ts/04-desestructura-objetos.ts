
interface Alumno1{
    matricula1 : number;
    nombre : string;
    edad : number;
    correo : string;
    grupo : Grupo;
}

interface Grupo{
    grupo : string;
    year : number;
}

const alumno2 : Alumno1 = {
    matricula1: 12345,
    nombre: 'Alan',
    correo: "funes@gmail.com",
    edad: 23,
    grupo : {
        grupo : 'idgs',
        year : 2023,
    }
}

const {matricula1, grupo : xx} = alumno2;
const {grupo} = xx

console.log(`La matricula es: ${matricula1}`);
console.log(`El nombre es: ${alumno2.nombre}`);
console.log(`El grupo es: ${grupo}`);
console.log(`El año es: ${alumno2.grupo.year}`);

const gps : string[] = ['IDGS', 'EVN', 'REDES'];
console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 2: ${gps[1]}`);
console.log(`Grupo 3: ${gps[2]}`);

const[a ,b] = gps;
 console.log(`Grupo 1: ${a}`)
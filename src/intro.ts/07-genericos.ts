
class PilaEnteros{
    private vec : number[] = [];
    insertar(x : number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

class PilasString{
    private vec : string[] = [];
    insertar(x : string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(22);
pila1.insertar(52);
console.log(pila1.extraer());

//cadenas
let pila2 = new PilasString();
pila2.insertar('hjghg');
pila2.insertar('66');
pila2.insertar('884');
console.log(pila2.extraer());


//clase genericas
class PilasGenerica<T>{
    private vec : T[] = [];
    insertar(x : T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

let pila3 = new PilasGenerica<number>();
pila3.insertar(58);
pila3.insertar(84);
pila3.insertar(5);
console.log(pila3.extraer());
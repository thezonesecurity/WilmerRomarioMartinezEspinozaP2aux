interface Persona {
    name: string;
    age: number;
}

class Person implements Persona {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    greetSaludo(){
        console.log("saludo...");
    }

}

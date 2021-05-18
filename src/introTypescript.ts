/*
//parte 1a
var namee: string = "wilmer romario";
namee = "15";

//parte 1b
function greet(nom:string, edad: number) {
    return `hello ${nom}, your age is ${edad}`;
  
}
let saludo = greet("Josie",25);
console.log(saludo);

//parte 1c
function validacionNever(): never {
   while(true){

   }
}

//parte 1d
function greet(nom:string, edad: number): never {
    return `hello ${nom}, your age is ${edad}`; 
}
let saludo = greet("Josie",25);
console.log(saludo); 

// parte 1e-1f
function mostrarsaludo(): string{
    return "Saludos Marie..."
}
function greet(f: () => string, nom:string, edad: number) {
    return  f() +`\n hello ${nom}, your age is ${edad}`;
}
console.log( greet(mostrarsaludo, "Josie", 25));
*/

// parte1h
function greet(nom:string, edad: number, year: number | string) {
    return `hello ${nom}, your age is ${edad} and year is ${year}`;
}
let saludo = greet("Josie", 25, "2021");
console.log(saludo);
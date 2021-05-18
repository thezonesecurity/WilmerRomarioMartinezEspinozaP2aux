//parte 1a
var namee = "wilmer romario";
namee = "15";
//parte 1b
/*
function greet(nom:string, edad: number) {
    return `hello ${nom}, your age is ${edad}`;
  
}
let saludo = greet("Josie",25);
//console.log(saludo); */
//parte 1c
function validacionNever() {
    while (true) {
    }
}
//parte 1d
/*
function greet(nom:string, edad: number): never {
    return `hello ${nom}, your age is ${edad}`;
  
}
let saludo = greet("Josie",25);
console.log(saludo); */
// parte 1e-1f
function mostrarsaludo() {
    return "Saludos Marie...";
}
function greet(f, nom, edad) {
    return f() + ("\n hello " + nom + ", your age is " + edad);
}
console.log(greet(mostrarsaludo, "Josie", 25));

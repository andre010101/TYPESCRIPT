"use strict";
let x = 10;
x = 15;
console.log(x);
// infencia x annotation
let y = 12;
//tipos básicos
let z = 12;
let firstName = "André";
let age = 30;
const isAdmin = true;
// string != string
console.log(typeof firstName);
firstName = "joão";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// o bject literals -> {prop:value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
//enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.P,
};
console.log(camisa);
//litral types
let teste;
teste = "autenticado";
teste = null;
//funcoes
function sun(a, b) {
    return a + b;
}
console.log(12 + 12);
function sayHelooTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelooTo("André"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("jose");
greeting("Pedro", "Sir");

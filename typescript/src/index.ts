
let x:number = 10;

x = 15;
console.log(x);

// infencia x annotation
let y = 12

//tipos básicos
let z: number= 12;
let firstName:string = "André"
let age: number = 30
const isAdmin: boolean = true

// string != string

console.log(typeof firstName);
firstName ="joão";
console.log(firstName);

// object
const myNumbers: number[] = [1,2,3];
console.log(myNumbers)
console.log(myNumbers.length)

//tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste",["a","b"]]

// o bject literals -> {prop:value}
const user: {name:string, age: number}={
    name:"Pedro",
    age:18,
};
console.log(user);

// union type

let id: string | number = "10"

id = 200


// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123
//enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.P,
};

console.log(camisa);

//litral types
let teste: "autenticado" | null

teste = "autenticado";
teste = null;
//funcoes
function sun (a: number, b: number)
{
    return a + b
}
console.log(12 + 12)

function sayHelooTo(name: string): string{
    return `Hello ${name}`;
}
console.log(sayHelooTo("André"));

function logger(msg: string): void{
    console.log(msg);
}
logger("Teste!");

function greeting(name: string, greet?: string)
{
    if(greet)
    {
        console.log(`Olá ${greet} ${name}`);
        return;
    }else{
        console.log(`Olá ${name}`)
    }
   
}

greeting("jose");
greeting("Pedro", "Sir");

//interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums:MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1:1, n2:2}));

function multiplyNumbers(nums:MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams= {
    n1:5,
    n2:10
}
console.log(multiplyNumbers(someNumbers));


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

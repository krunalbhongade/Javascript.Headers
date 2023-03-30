console.log("This is tutorial 52");

function greet(name1, greetText = "Greeting from js"){
    console.log(greetText + " "+  name1);
    console.log(name1 + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

// let name  = "Krunal"
let name1 = "Adi";
let name2 = "pravi";
let name3 = "thool";
greetText = "GoodMorning";

greet (name1, greetText);
greet (name2, greetText);

let returnVal = sum(1,2,3);
console.log(returnVal);

// let returnVal = greet(name3);
// console.log(returnVal);

// greet (name3);

// console.log(name  + " is a good boy");
console.log(name1 + " is a good boy");
console.log(name2 + " is a good boy");
console.log(name3 + " is a good boy");
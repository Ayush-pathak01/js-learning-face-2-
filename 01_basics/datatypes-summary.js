//JavaScript dynamic type language hai
// java statically type language hai

//primitive
// 7 types : String , Number , Boolean , null , Undefined ,Symbol , BigInt

const score = 100;
// const score2:number = 100  // This is ts code (hum datatype od datatype likhate hai ts main type safty ke liye )

//Reference (Non primitive)
// Array , Objects , Functions

const heros =["shaktiman", "naagraj","doga"]

let myobj ={
    name: "aysuh",
    age: 22,
}

const myfunction = function () {
    console.log("hello world")
}


console.log(typeof heros);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) , Heap Non Primitive)

let username = "ayush"
let anothername= username
anothername = "pathak"
console.log(username);
console.log(anothername);


let userOne ={
    email : "ayushpathak@google.com",
    upi : "user@ybl"
}

let userTwo =userOne

userTwo.email ="ayush@gmail.com"
console.log(userOne);
console.log(userTwo);



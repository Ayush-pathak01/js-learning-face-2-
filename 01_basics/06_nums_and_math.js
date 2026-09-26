const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 23.83839
// console.log(othernumber.toPrecision(3));   // precision = example 324.4i004 and precision is 3 .Then OUTPUT is 324.


const hundreds =100000
// console.log(hundreds.toLocaleString()); // outwill come  1,00,000 

// important = vlaueof, toString, tolocalString, isProtoTypeof, ProtoType, MIN_VALUE, MAX_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER etc.


//+++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(math.abs(-4));
// console.log(math.round(4.6));
// console.log(math.ceil(4.2));
// console.log(math.floor(4.9));
// console.log(math.min(4, 3, 5, 8));
// console.log(math.max(4, 3, 5, 8));

console.log(Math.random()); // random value  = 0 to 1
console.log((Math.random()*10)+1); // +1 add because avoid this condition 0.0.. 
console.log(Math.floor(Math.random()*10)+1); // +1 add because avoid this condition 0.0.. 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))



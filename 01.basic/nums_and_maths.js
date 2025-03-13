const score =400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());        // convert number to string
console.log(balance.toString().length); // convert to string and also find length
console.log(balance.toFixed(2));        // . ke bad kitne 0's lagane he 

const otherNumber = 23.8934;
console.log(otherNumber.toPrecision(3));

const handrade = 1000000;
console.log(handrade.toLocaleString('en-IN')); //convert this num.into indian value

//++++++++++++++++++++++++ maths +++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); // nagative into positive
console.log(Math.round(4.6)); // ye values ko roundup karta he
console.log(Math.ceil(4.2)); //means 4.2 ke uper jayega
console.log(Math.floor(4.9)); //means 4.9 ke niche jayega
console.log(Math.min(4,3,2,5,6)); // print sabse smalle value 

console.log(Math.random()); // iski value hamesha 0 or 1 ke bich me aati he
console.log((Math.random()*10 ) + 1);

const max =20
const min =10
console.log(Math.floor(Math.random() * ( max - min + 1)) + min); //
 
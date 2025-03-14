// Array

const myarr = [2,3,5,6,8];
const stringarr = ["abhi","anup","you"];

const arr2 = new Array(5,6,8,7); // second type to declare array
console.log(myarr);
console.log(stringarr);
console.log(arr2);

console.log(myarr[2]); // kis index pe kon si value
 
// Array methods //

myarr.push(78); // add new value 
console.log(myarr); 

myarr.pop(); // isme koi argument dene ki jarurat nhi hoti last wali value sidhe delete ho jati he
console.log(myarr);

myarr.unshift(9); // isse arr ke starting me argument vali value add ho jati
console.log(myarr);

myarr.shift(); // first wali value delete ho jati he
console.log(myarr);

console.log(myarr.includes(5)); //argument me jo bhi value denge wo arr me he ya nhi pta karne ke liye
console.log(myarr.indexOf(5)); //argument me jo bhi value denge wo arr me kis index pe he 
const newarr = myarr.join(); // arr ko string me convert karta he
console.log(myarr); 
console.log(newarr);
console.log(typeof newarr);

console.log("A ", myarr);

const myA1 = myarr.slice(1,3);
console.log(myA1);

console.log("B " ,myarr);

const myA2 = myarr.splice(1,3);
console.log("C " ,myarr);

console.log(myA2);

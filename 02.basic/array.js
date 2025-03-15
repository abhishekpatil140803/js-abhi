// Array

/*const myarr = [2,3,5,6,8];
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
  */
//+++++++++++++++++++++++// day two

const marver_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash", "batman"];

//marver_heros.push(dc_heros);
console.log(marver_heros);
console.log(dc_heros);


const all_heros = marver_heros.concat(dc_heros); // combine 2 arrays into a single new array
console.log(all_heros);

const all_new_heros = [...marver_heros,...dc_heros]; // combine 2 and more arrays into a single new array
console.log(all_new_heros);

const anotherarr = [6,7,8,[1,2],[5,6,8,9,[7,5,6,[4,6,2]]]]; // sub array ko ek hi arr me kar deta he
const newanothersrr = anotherarr.flat(Infinity);
console.log(newanothersrr);

console.log(Array.isArray("Abhishek"));// aray he ya nhi tru ya false me ans deta he 
console.log(Array.from("Abhishek")); // arr me convert karta he 
console.log(Array.from({name : "Abhishek"})); // intrasting
 let score1 =100;
 let score2 =200;
 let score3 =300;
 let score4 =400;

 console.log(Array.of(score1,score2,score3,score4)); // ye bhi combine karta he multiple array ko
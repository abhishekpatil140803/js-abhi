const name ="abhishek"; //first type to diclare a string
const repoCount = 07 ;

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Abhishek-ap-com"); // second type to declare string
console.log(gameName[0]);                // To find the value of 0 th index
console.log(gameName.__proto__);         //  Use to fint the object
console.log(gameName.length);            //  To finde the length of string
console.log(gameName.toUpperCase());     // use to convert uppercase
console.log(gameName.charAt(2));         // kis index pe kon sa character he 
console.log(gameName.indexOf('h'));      // kon sa char. kis index pe he 

const newString =gameName.substring(2,6);// divide a string into 2 parts
console.log(newString);

const anotherString =gameName.slice(-2,7);// ulta krna string ko (iske under - , + dono type ki value use ksr sakte he )
console.log(anotherString);

const Newstring = "   abhishek ";
console.log(Newstring);
console.log(Newstring.trim()); // to remove strating and ending spaces

const url = "https://abhishek.com/abhishek%07patil";
console.log(url.replace("%07","-")); // replce values (search,toreplace)

console.log(gameName.split("-")); // to convera or split a string in the forms of array

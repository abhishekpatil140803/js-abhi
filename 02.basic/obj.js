// two types to declare object 
// first is singletone
//second is literals
//ex litarals
const mysym = Symbol ("key1");
const jsuser = {
    "full name" : "abhishek patil", // ise dot (.) se access nhi kar sakte
    name : "abhishek",
    [mysym]:"mykey1",
    age : 18,
    location : "pune",
    email:"abhi@gmail.com",
    loggedin : false,
    lastloggedIn : ["monday","friday"]
}
console.log(jsuser.email); // first type to access 
console.log(jsuser["email"]);// second type
console.log(jsuser["full name"]);//
console.log(jsuser[mysym]);

jsuser.email = "hitesh123@.in";
console.log(jsuser.email); // value change copy of
Object.freeze(jsuser); // lock user obj
jsuser.email = "mihitesh123@.in";
console.log(jsuser.email); // no change aayega wahi


//+++++++++++//

// ex singletone obj 

const tinderuser = new Object();//this is singletone obj 
const tinder_user = {}; // non-singletone obj nut dono ki ka outpue same

//console.log(tinderuser);        
//console.log(tinder_user); 

tinder_user.Id = "123abc";// add value to obj (tinder_user)
tinder_user.name ="sam";
tinder_user.loggedin =false ; 

//console.log(tinder_user);  
// nested object 
const regulerobj = {
    name : "sam",
    email: "sam@.com",
    fullname:{
        userfullname : {
            firstname:"Abhishek",
            lastname:"patil"
        }

    }
}

console.log(regulerobj.fullname.userfullname.firstname);

// combine two or more objects

const obj1  = {1: "a" ,2: "b" }
const obj2  = {3: "a" ,4: "b" }
const obj3 =Object.assign({},obj1,obj2);
console.log(obj3);
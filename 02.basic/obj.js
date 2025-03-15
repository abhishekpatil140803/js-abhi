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
 
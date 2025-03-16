const user = {
    username : "Hitesh",
    price : 999,
    welcomemassage : function (){
        console.log(`${this.username},weolcome to website`);
        console.log(this);
        
    }
}
//user.welcomemassage();
//user.username ='sam';
//user.welcomemassage();
//console.log(this);

/*function chai(){
    console.log(this);
}
chai();*/
/*
function chai(){
   let username = "hitesh"
    console.log(this.username);
}
chai(); */
 
/*const chai= () => { //arrofun
    console.log(this);
}
chai();*/

const addtwo =(num1 ,num2) => {
    return num1+num2;
}
console.log(addtwo(3,6)); 


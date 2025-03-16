// function 

function addtwonumbers(number1,number2){ //parameters
    let result = number1+number2;
    return result;
};

const result = addtwonumbers(3,5); // arguments 
//console.log("Result : " ,result);

                         //+++++//

function loggedinusermassage(username){
    return `${username} just loggedin`
};

//console.log(loggedinusermassage("hitesh"));

function loggedinusermassage(username="sam"){ // defoult value de sakte he kyoki agar hamne koi argument paas nhi kiye to defoult value print ho

    if(!username){
        console.log("please enter Username");
        return ;
        
    }
    return `${username} just loggedin`
};
//console.log(loggedinusermassage("abhi")); // argument value

function calculatecartprice(...num1){
    return num1;
};

//console.log(calculatecartprice(200,5,74,400,));

function calculatecartprice(val1,val2,...num1){
    return num1;
};

//console.log(calculatecartprice(200,5,74,400,));

const user ={
    usernam :"hitesh ",
    price : 199 ,
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.usernam} and price is ${anyobject.price}`)
};

handleobject(user);

const array =[200,80000,300,400]

function handleaaray(anyaarray){
    //console.log(anyaarray[1]);
    return anyaarray[2];
};
//handleaaray(array)
console.log(handleaaray(array));
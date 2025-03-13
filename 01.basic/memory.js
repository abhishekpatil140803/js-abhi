/* there are two types of memory
first is stack => is memory me primitive datatype ki value store hoti he  
second is Heap => is memory me non-primitive datatype ki value store hoti he

ex stack memory => */

let  myyoutubechannel = "abhishekpatil.com";
let anotheryoutubchannel =  myyoutubechannel;   
anotheryoutubchannel ="hiteshyoutub.com";
console.log(myyoutubechannel);
console.log(anotheryoutubchannel);

/* ex Heap memory */

let Userone = {
    email : "abhi@google.com",
    upi : "abc12ybl"
}
let UserTwo = Userone
UserTwo.email = "hiteshamzon.com";
console.log(Userone.email);
console.log(UserTwo.email);

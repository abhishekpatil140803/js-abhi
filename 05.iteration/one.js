// for of loop

const arr = [1,2,5,9,7,8];
for (const num of arr) {
    console.log(num);
}

const greeting = "Hitesh";
for (const greet of greeting){
    console.log(greet);
}

// maps 

const map = new Map()
map.set("IN",'india')
map.set("USA",'united state of amarica')
map.set("FR",'france')
//console.log(map);
for (const [keys,value] of map) {
    console.log(keys,":-",value);
} //

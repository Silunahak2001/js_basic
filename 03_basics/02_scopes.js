
//var c = 300
// Global scope
/*
let a = 300
if(true){       // scope
let a = 10
const  b = 20    //Block scope 
var c = 30
console.log("inner:" , a);

}

*/
//console.log(a);
//console.log(b);
//console.log(c);


//nested block

function one (){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}
/*
//one()
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
        
    }
    console.log(website);
    
}
console.log(username);
*/
//+++++++++++++++++++++++++interesting+++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}

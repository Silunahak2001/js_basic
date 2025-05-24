
function sayMyName(){
 console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

//sayMyName()

/*function addTwoNumbers(number1 , number2){ //function is define to make parameter
    console.log(number1 +number2);

   //let result = number1 +number2
   //return result
    
}
   */

function addTwoNumbers(number1 , number2){//function is define to make parameter
    //console.log(number1 +number2);
//console.log("hitesh");
    // let result = number1 +number2
  // return result
   return number1 + number2
   
}
 const result = addTwoNumbers(3 , 5)// inside parameter is called argument
 //console.log("result :" , result);
 


 function loginUserMessage(username = "sam"){
    //if(username === undefined)
        if(!username){
        console.log("please enter a username");
        return
        

    }
    return `${username} just logged in`
 }
//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("hitesh"));



//function calculateCartPrice( val1 , val2 , ...num1){ // rest operator or spread operator depend uopn their uses
   // return num1
//}

function calculateCartPrice(  val1 , val2 , ...num1){ // rest operator or spread operator depend uopn their uses
    return num3
}
//console.log(calculateCartPrice(200 , 400 , 500 , 2000));

const user = {
    username: "hitesh",
    Prices: 199
}
function handleObject(anyobject){
         console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
         
}

//handleObject(user)
handleObject({
    username:"sam",
    Price:399
})

const myNewArray =[200 ,400 , 100 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]));










// IF//

//const isuserloggeIn = true
//if(2 != 3){
//console.log("executed");

//}

// < ,> ,<= ,>= , ==, != ,=== , !==

/*
const balance = 1000
//if(balance > 500) console.log("test"), console.log("test2");

if(balance < 5){
    console.log("less than 500");
    
} else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less than 900");
    
} else{
    console.log("less than 1200");
    
}*/



const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true
if(userLoggedIn && debitcard && 2 ==2){
    console.log("allow to buy courses");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}

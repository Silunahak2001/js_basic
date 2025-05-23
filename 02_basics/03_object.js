// singleton//
//object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name :"Hitesh", 
    "full name": "Hitesh choudhary",
    [mySym]:"mykey1",
    age: 18,
    location :"hyderabad",
    Email:"hitesh@google.com",
    isLoggedIn :false,
    LastLoginDays : ["Monday" , "Saturday"]

}

 console.log(Jsuser.Email)
 console.log(Jsuser["Email"])
 console.log(Jsuser["full name"])
 console.log( typeof Jsuser[mySym])



 Jsuser.Email = "hitesh@chatgpt.com"
 //Object.freeze(Jsuser)
 Jsuser.Email = "hitesh@microsoft .com"
 //console.log(Jsuser);


 Jsuser.greeting = function(){
    console.log("Hello JS user");
    Jsuser.greetingTwo = function(){
        console.log(`Hello js user , ${this.name}`);
        
    }
    
 }
 console.log(Jsuser.greeting());
 console.log(Jsuser.greetingTwo());
 

 
 


 
 
 

 

// Dates//

/*let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/


//let myCreateDate = new Date(2025, 0,2)
//let myCreateDate = new Date(2025, 0,21 )
//let myCreateDate = new Date(2025, 0,21 , 5, 3)
//let myCreateDate = new Date("2025- 01- 14")
let myCreateDate = new Date("05- 14-2025")
//console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default' ,{
    weekday:"long",
    
})












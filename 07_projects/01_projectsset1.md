# Projects related to DoM


## project link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html



# Solution code
## Project 1



```Javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")



buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
         body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
         body.style.backgroundColor = e.target.id
        }
         if(e.target.id === 'yellow'){
         body.style.backgroundColor = e.target.id
         }
         if(e.target.id === 'purple'){
         body.style.backgroundColor = e.target.id
         }


    });
    
});

```

## project 2

```JavaScript
const form = document.querySelector('form')
// this usecase will gave you empty
//const height=  parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function(e){
    e.preventDefault()

 const height=  parseInt(document.querySelector('#height').value)
 const weight=  parseInt(document.querySelector('#weight').value)
 const results = (document.querySelector('#results'))


 if( height === '' ||  height<0 || isNaN(height)){
results.innerHTML = `please give a valid height ${height}`;

 }
 else if( weight === '' ||  weight <0 || isNaN(weight)){
results.innerHTML = `please give a valid weight ${weight}`;
 }
 else{
  const bmi =  (weight / ((height*height)/10000)).toFixed(2) 
  // show the results

  results.innerHTML = `<span>${bmi}</span>`
 }

});

```



## project 3

```JavaScript


const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
//console.log(date.toLocaleTimeString());
     clock.innerHTML = date.toLocaleTimeString();
     
}, 1000);



```



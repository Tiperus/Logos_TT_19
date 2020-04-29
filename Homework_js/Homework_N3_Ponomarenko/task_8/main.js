let number = +prompt('number')
let step = +prompt('step')

let result = 1;

if(step>0){
   for(let i = 1; i <= step; i++){
        result = result * number
        console.log(result)}
   }
    else if(step<0){
    step=-step
    }
else{console.log(1)}


    

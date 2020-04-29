let number = +prompt('number');
let step = +prompt('step');
let result = 1, variable;

if(step>0) variable=step
    
else if(step<0)variable=-step

for(let i = 1; i <= variable; i++){
     result = result * number
}
if(step>0)console.log(result)
else {
     result=1/result
     console.log(result)} 
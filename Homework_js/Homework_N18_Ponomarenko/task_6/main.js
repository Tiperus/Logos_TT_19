let arr =[1,2,3,0,4,5];

let sum = arr.reduce(function(accum,val,index) {
    if(index < arr.indexOf(0)){accum+=val}
    else {accum+0}
    
    return accum
    
    },0);
console.log(sum)

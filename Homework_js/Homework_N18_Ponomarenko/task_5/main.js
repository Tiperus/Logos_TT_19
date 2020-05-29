let arr =[1, 'string', 5, [2, 3, 5], 7, [8, 9]];
let sum=0;
let newArr=arr.filter(function(val){
   if(Array.isArray(val)===true) return val;
    
});
console.log(newArr)
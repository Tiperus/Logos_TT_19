let arr =[1,-2,3,0,4,-5,6,-11];

let newArr=arr.filter(val => (val>=0))
console.log(newArr)  
newArr.forEach(function(val,i){
    newArr[i]= (Math.round(Math.sqrt(val)*100))/100 
})
console.log(newArr)


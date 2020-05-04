
let number=(num) => {
    let result = 1;
    let deposit=0;
    let fibNumbers = [];
         
    for(let i=0; i<num; i++){
        let sum=result+deposit;
        deposit=result;
        result = sum;
        fibNumbers[i] = sum;
    }
  
   
    return fibNumbers
}
let x =+prompt("enter number");
let y =number(x);
// console.log(y);
// for(let i=1; i<=x; i++){
// console.log(y[i]);
// }
console.log(y.toString());
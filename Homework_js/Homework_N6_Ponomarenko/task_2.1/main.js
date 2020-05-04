function progr(a,b){
    let first =1;
    let number =a;
    let count =b;
    let sum=[];
    // let fibNumbers = {};
    for(let i=0; i<count; i++){
        let dob=first*number;
        sum[i]=first;
        first=dob;}
    return sum;

}
let znamen=+prompt("Введіть знаменник")
let kilkist=+prompt("Введіть кількість елементів")
let x=progr(znamen,kilkist);
console.log(x.toString());
let result = x.reduce(function(a, b) {
    return a + b;
  }, 0);
console.log(result);
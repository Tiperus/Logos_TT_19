let name = prompt('Введіть текст')
let result=0;
let i = 0;

 
let x=name.indexOf("html");
while (x!=-1 && x<name.length) 
{i=x+3; result++;x=name.indexOf("html",i)}
    

console.log(result)

// other possibility

// let name = prompt('Введіть текст')
// let result=0;
// let i = 0;

// for(i; i<name.length; i++){
//     let x=name.indexOf("html",i);
//     if (x!=-1 && x<name.length) {i=x+3; result++;}
//     else break;
// }
// console.log(result)

let n=+prompt("Put fractions number");
function fractions(a){
    let x=Math.abs(a);
    if (x==0) alert("Дробове значення -" +0);
    else{
        x-=Math.floor(x);}
    return x;
}
    let num = ((fractions(n)).toFixed(10));
    // console.log(Math.floor(num*1000)/1000);
    console.log(+(num));

// Старий варіант

// let n=+prompt("Put fractions number")
// function fractions(a){
//     let fractions=a;
//     if(a<0){
//         a*=(-1);
//         fractions*=(-1);
//         while(fractions>1){
//             fractions=a-=1;
//         }
//         fractions*=(-1)
//         return fractions;}
     
//     else if (a<1) return a;
//     else{
//     while(fractions>1){
//         fractions=a-=1;
//     }
//     return fractions;
//     }
// }

// let num = fractions(n);
// console.log(num.toFixed(10))
// alert(num.toFixed(10))
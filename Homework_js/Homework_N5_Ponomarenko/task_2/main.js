let num=+prompt("Please put number")
let x=num;
// result(num)
function result(a){
    
    let rangeSimple =[];
    next:
    for(let i=1; i<=a; i++){
        for (let j = 2; j < i; j++){
        if(i%j==0) continue next;}
        // console.log(i);
        rangeSimple[i] =i;

    }
    return rangeSimple;
}
let y=(result(num));
// let argum = function filter(y,x) {
//     if (x==y)return y;
//     else return(0);
//   };
let korectNumber = y.filter(function(number) {
    return number == x;
  });
  if (korectNumber.length==0) alert("Число складне -"+x);
    else alert("Число просте -"+x);
//   console.log(x)  
//   if (argum==empty) alert("Число складне");
//   else{alert("Число просте");  
// console.log(argum);}
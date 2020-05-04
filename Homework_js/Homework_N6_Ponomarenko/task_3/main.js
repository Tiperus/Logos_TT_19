function simple(a,b) {
        let i=a;
        let result=[];
        
    next:
    for(i; i<=b; i++){
        
        for (let j=2; j < i; j++){
        if(i%j==0) continue next;}
        // console.log(i);
        result[i]=i;

    }

    
    return result;
    
}

let start=+prompt("Введіть початок")
let end=+prompt("Введіть кінець")
if (start<0||end<0) alert("Введіть додатнє число");
else{let x=simple(start,end);
   // let y= simple.filter(function(result) {
    //     return result > 0;
    //   });
console.log(x.toString());}

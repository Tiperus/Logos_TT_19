let num=+prompt("Please put number")
result(num)
function result(a){
    let i;
    next:
    for(i=1; i<=a; i++){
        for (let j = 2; j < i; j++){
        if(i%j==0) continue next;}
        console.log(i)
    }
    
}

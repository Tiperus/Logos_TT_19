

function f1(...x){
    let i=0;
    let maxim=x[i];
    let y=arguments.length;
    
    next:
    for(i; i<=y; i++){
        let next=x[i+1];
     if (maxim<next){maxim=next;}
     else if (i<y) continue next
    
    }
    return console.log(maxim)
}
f1(5,7,10,3,100,4,6,-2,0,1000,4)


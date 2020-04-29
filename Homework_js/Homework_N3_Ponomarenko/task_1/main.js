let i=1,n=+prompt("введіть натуральне число"),result=1, x=1;

for(i;i<=n;i++){
    result=x*i;
    x=result;
    console.log(result);
}

console.log(result)
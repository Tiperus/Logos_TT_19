let n = +prompt("Put number");
let b=0;
if(n==0) {n=+prompt("Будь ласка введіть число"); b=Math.sqrt(n);}
else if (n!==Number) {n=+prompt("Повинне бути числове значення");b=Math.sqrt(n);}
else if (n<0) {n=+prompt("Повинне бути додатнє число");b=Math.sqrt(n);}
else  b=Math.sqrt(n);


console.log(b) 
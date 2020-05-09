let x=prompt("Введіть посилання на сайт");
x=x.toLowerCase();

if(x.charAt(4)=="s") x=x.substring(8);
else x=x.substring(7);

console.log(x);


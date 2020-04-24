let t1 = prompt("Який максимальний бал на тесті з 10 питань?");
let o = 0;
if (t1 == 10){  
o = 0 + 1;}

console.log(o);

let t2 = prompt("Який мінімальний вік студента?");
let t = 0;
if (t2 == 15){  
t = 0 + 1;}
console.log(t);

let t3 = prompt("Який найнижчий бал допускається?");
let th = 0;
if (t3 >= 5){  
th = 0 + 1;}
console.log(th);

let t4 = prompt("Скільки Вам років?");
let f = 0;
if (t4 >= 15){  
f = 0 + 1;}
console.log(f);

let t5 = prompt("Який бал Ви б хотіли отримати?");
let fi = 0;
if (t5 == 10){  
fi = 0 + 1;}
console.log(fi);

let t6 = prompt("Який бал Ви очікуєте?");
let si = 0;
if (t6 >= 7){  
si = 0 + 1;}
console.log(si);

let t7 = prompt("Задайте число в проміжку між 3 і 7"); 
let se = 0;
if (t7 < 3);  
else if (t7 <= 7){
se = 0 + 1;   
}
console.log(se);

let t8 = prompt("Задайте натуральне число поза проміжком між 3 і 7"); 
let ei = 0;
if (t8 > 7){
    ei = 0 + 1;   
    }  
else if (t8 <1);
else if (t8 <3)
{
ei = 0 + 1;   
}
console.log(ei);


let t9 = prompt("Якого року Ви народились?");
let n = 0;
if (t9 <= 1940){
    alert("Ви привид?");   
}
else if (t9 <= 2004){  
n = 0 + 1;}
console.log(n);

let t10 = prompt("Як Ви думаєте скільки пунктів Ви отримаєте?");
let te = 0;
if (t10 <= 5){  
te = 0 + 1;}
console.log(te);

let sum = (o+t+th+f+fi+si+se+ei+n+te);
console.log(sum);

if (sum == 10){
    alert("SUPER!!!");
}
else if(sum >= 7){
    alert("Ви молодець!");
}
else if(sum < 7){
    alert("Слабо!");
}
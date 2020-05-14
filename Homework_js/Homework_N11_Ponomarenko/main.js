let x=document.getElementsByTagName("li");
let a=document.body.style;
let y=document.querySelector('h1');
// const par=document.getElementsByTagName('p');
let c=document.querySelector("p");
let d = document.querySelectorAll('p > a');
let div = document.querySelector('div');
let ul = document.querySelector('ul');

let a_arr=[];

for(let i=0;i<x.length;i++ ){
      a_arr[i]= prompt(x[i].innerHTML);
    }
a.backgroundColor=a_arr[0];
a.fontStyle = a_arr[1];
y.style.textAlign = a_arr[2];b
c.style.backgroundColor = a_arr[3];
c.style.color=a_arr[4];
for(let i=0;i<d.length;i++ ){
  d[i].style.color = a_arr[4];
}
let b_arr=a_arr[5].split(' ');

div.style.color = b_arr[0];
div.style.fontSize = b_arr[1];
div.style.fontWeight = b_arr[2];

ul.style.listStyle = a_arr[6];

let link = document.querySelectorAll('p > a')
console.log(link);
for(let i=0; i<link.length; i++){
  quest=prompt(`Напишіть ${(i+1)} посилання`);
  link[i].href="http://www."+quest;
  link[i].innerHTML = quest;
}






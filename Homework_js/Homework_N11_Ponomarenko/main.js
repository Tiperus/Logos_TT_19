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









// let background = prompt('Write a background color');
// document.body.style.backgroundColor = background;

// let fontType = prompt('Write a font type');
// document.body.style.fontStyle = fontType;

// let textAlign = prompt('Text align for title');
// const h = document.querySelector('h1');
// h.style.textAlign = textAlign;

// let bckgrndP = prompt('Write a background color for paragpaph');
// let textColor = prompt('Write a text color for paragpaph');
// const p = document.querySelector('p');
// p.style.backgroundColor = bckgrndP;
// p.style.color = textColor;

// for(let i = 1; i <= 3; i++){
//     let createLink = prompt(`Write a ${i} link`);
//     let linkColor = prompt(`Write a color for ${i} link`);
//     const link = document.createElement('a');
//     const br = document.createElement('br');
//     link.text = createLink;
//     link.target = '_blank';
//     link.style.color = linkColor;
//     p.appendChild(link).href = `http://${createLink}`;
//     p.appendChild(br);
// }


// let colorTextDiv = prompt('Write a color for text in block');
// let fontSize = prompt('Write a font size');
// let fontWeight = prompt('Write a font-weight');
// const div = document.querySelector('div');
// div.style.color = colorTextDiv;
// div.style.fontSize = fontSize;
// div.style.fontWeight = fontWeight;

// let markType = prompt('Write type of marking list');
// const ul = document.querySelector('ul');
// ul.type = markType;

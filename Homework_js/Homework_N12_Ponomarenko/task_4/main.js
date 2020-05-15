let box=document.querySelector('ol');
box.style.position='absolute';
box.style.top='20%';
box.style.left='30%';

let colors = document.querySelectorAll('ol > li');
console.log(colors)

for(let i = 0; i < colors.length; i++){
    colors[i].style.fontSize='25px';
    colors[i].addEventListener('click',function(){
        colors[i].style.color = this.innerText
        colors[i].style.fontSize='30px';
    })
}

let wind=document.querySelector('body');
wind.style.display='flex';
wind.style.justifyContent='center';
wind.style.alignItems='center';
wind.style.width='window.innerWidth';
wind.style.height='600px';


let box=document.querySelector('section');
box.style.display='flex';
box.style.flexDirection='row';
box.style.justifyContent='center';
box.style.width='70%';
box.style.height='60%';


let colors = document.querySelectorAll('section > div');
console.log(colors)

for(let i = 0; i < colors.length; i++){
    colors[i].style.marginLeft='8px';
    colors[i].style.width='30%';
    colors[i].style.height='95%';
    colors[i].style.border='5px double maroon';
    colors[i].addEventListener('click',function(){
        let a= prompt('Введіть посилання на малюнок')
        colors[i].style.backgroundImage='url('+a+')'
        colors[i].style.backgroundPosition='center'
        colors[i].style.backgroundSize='cover'
    })
}
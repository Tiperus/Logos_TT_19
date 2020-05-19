
let board = document.createElement('div');
board.classList.add('keyboard');
let keysBox = document.createElement('div');
keysBox.classList.add('keyboard__keys');
// charCode
let keyboard=[9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, , 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, , 16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, ,32];
// keyCode
let keyNumber=[9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, , 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, , 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 32]

for(let i=0; i<keyboard.length; i++){
    let key = document.createElement('button');
    key.classList.add('k_'+keyboard[i],'keyboard__key', 'kC'+keyNumber[i]);
    key.innerHTML=String.fromCharCode(keyboard[i]);
    key.setAttribute('data',keyboard[i]);
    const insertLineBreak = [" "].indexOf(keyboard[i])!==-1;
    if(insertLineBreak){
        keysBox.appendChild(document.createElement('br'));
    }
    else{ keysBox.appendChild(key);
    }  
};
board.appendChild(keysBox);
document.body.appendChild(board);

let key = sel => document.querySelector(sel);
key('.k_9').classList.add('keyboard__key--wide');
key('.k_9').innerHTML = ('tab');
key('.k_92').classList.add('keyboard__key--wide');
key('.k_92').innerHTML = ('backspace');
key('.k_13').classList.add('keyboard__key--wide');
key('.k_13').innerHTML = '<i class="material-icons">backspace</i>';
key('.k_16').classList.add('keyboard__key--wide');
key('.k_16').innerHTML = ('shift');
key('.k_20').classList.add('keyboard__key--wide');
key('.k_20').innerHTML = '<i class="material-icons">keyboard_capslock</i>';
key('.k_32').classList.add('keyboard__key--extra-wide');
key('.k_32').innerHTML = '<i class="material-icons">space_bark</i>';

window.addEventListener('keydown',function(event){
   key('.kC'+event.keyCode).classList.toggle('keyboard__key--dark');

});

window.addEventListener('keyup',function(event){
   key('.kC'+event.keyCode).classList.toggle('keyboard__key--dark');
   // console.log(event.keyCode);
   // console.log(key('.kC_'+event.keyCode));
});
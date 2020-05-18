
let board = document.createElement('div');
board.classList.add('keyboard');
let keysBox = document.createElement('div');
keysBox.classList.add('keyboard__keys');
let keyboard=[113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];


for(let i=0; i<keyboard.length; i++){
    let key = document.createElement('button');
    key.classList.add('keyboard__key');
    key.innerHTML=String.fromCharCode(keyboard[i]);
    const insertLineBreak = [97, 13, 47].indexOf(keyboard[i])!==-1;
    if(insertLineBreak){
        keysBox.appendChild(document.createElement('br'));
    }
    else{ keysBox.appendChild(key);
    }
    // key.addEventListener('click',function(event){
    //     console.log(event);
    // });
    key.addEventListener('keydown',function(){
        key.classList.toggle('keyboard__key--dark');
        // console.log(event);
    });
    key.addEventListener('keyup',function(){
        key.classList.toggle('keyboard__key--dark');
        // console.log(event);
    });
    
    
};

board.appendChild(keysBox);
document.body.appendChild(board);

console.log(document.querySelector('button'));
let but = sel => document.querySelector(sel);
console.log(but('button'));

// but('button').addEventListener('click',function(event){
//     console.log(event);
// });





// const Keyboard = {
//     elements:{ main: null, keysContainer:null, keys:[] },
//     eventHandlers:{oninput:null, onclose:null},
//     properties:{value:'', capsLock:false, shift:false},
//     init(){
//         // створює основний елемент
//         this.elements.main = document.createElement('div');
//         this.elements.keysContainer = document.createElement('div');
//         // стилізує основний елемент
//         this.elements.main.classList.add('keyboard','1keyboard--hidden');
//         this.elements.keysContainer.classList.add('keyboard__keys');
//         this.elements.keysContainer.appendChild(this._createKeys());
//         // додає в ДОМ
//         this.elements.main.appendChild(this.elements.keysContainer);
//         document.body.appendChild(this.elements.main);
//     },
//     _createKeys(){
//         const fragment = document.createDocumentFragment();
//         const keyLayout = [
//             '`','1', '2', '3', '4', '5', '7', '8', '9', '0', 'backspace',
//             'tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[',']','|',
//             'caps','a','s','d','f','g','h','j','k','l',';','"','enter',
//             'shift', 'z','x','c','v','b','n','m',',','.','/','space'
//         ];
//         // створється html для ікон
//         const createIconHTML = (icon_name) => {
//             return `i class="material-icons">${icon_name}</i>`;};
        // keyLayout.forEach(key =>{
        //     const keyElement = document.createElement('button');
        //     const insertLineBreak = ['backspace','|','enter','/'].indexOf(key)!==-1;
        //     // зробити кнопками
        //     keyElement.setAttribute('type','button');
        //     keyElement.classList.add('keyboard__key');
        //     switch(key){
        //         case "backspace": keyElement.classList.add('keyboard__key--wide');
        //                           keyElement.innerHTML = ('backspace');

        //                           keyElement.addEventListener('click',()=>{
        //                           this.properties.value=this.properties.value.substring(0,this.properties.value.length-1);
        //                           this._triggerEvent('oninput');
        //                         });
        //                         break;
        //         // case "tab": keyElement.classList.add('keyboard__key--wide');
        //         //                 keyElement.innerHTML = ('tab');

        //         //                 keyElement.addEventListener('click',()=>{
        //         //                 this.properties.value=this.properties.value.substring(0,this.properties.value.length+3);
        //         //                 this._triggerEvent('oninput');
        //         //               });
        //         //               break;
        //         case "caps": keyElement.classList.add('keyboard__key--wide','keyboard__key--activatable');
        //                         keyElement.innerHTML = ('keyboard_capslock');

        //                         keyElement.addEventListener('click',()=>{
        //                         this._toggleCapsLock();
        //                         keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
        //                         break;
                                
        //                       });
        //                       break;
        //         case "enter": keyElement.classList.add('keyboard__key--wide');
        //                       keyElement.innerHTML = ('keyboard_return');

        //                       keyElement.addEventListener('click',()=>{
        //                       this.properties.value += '\n';
        //                       this._triggerEvent('oninput');
        //                     });
        //                     break;
        //         // case "shift": keyElement.classList.add('keyboard__key--wide');
        //         //             keyElement.innerHTML = ('publish');

        //         //             keyElement.addEventListener('click',()=>{
        //         //             this._toggleCapsLock();
        //         //             keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
        //         //         });
        //         //             break;
        //         case "space": keyElement.classList.add('keyboard__key--extra-wide');
        //                     keyElement.innerHTML = ('space_bar');

        //                     keyElement.addEventListener('click',()=>{
        //                     this.properties.value += ' ';
        //                     this._triggerEvent('oninput');
        //                   });
        //                   break;

        //         default: 
        //                 keyElement.textContent = key.toLowerCase();
                        

        //                   keyElement.addEventListener('click',()=>{
        //                   this.properties.value+=this.properties.capsLock ? key.toUpperCase() :key.toLowerCase();
        //                 //   this.properties.value+=this.properties.shift ? key.toLocaleUpperCase() :key.toLocaleLowerCase();
        //                   this._triggerEvent('oninput');
        //                 });
        //                 break;
                    
        //     }

//             fragment.appendChild(keyElement);
//             if(insertLineBreak){
//                 fragment.appendChild(document.createElement('br'));
//             }
//         });
//         return fragment;

//     },
//     _triggerEvent(handlerName){
//         console.log('Event Triggered! Event Name:' + handlerName);
//     },
//     _taggleCapsLock(){
//         console.log('Caps Lock Toggled');
//     },
//     _taggleShift(){
//         console.log('Shift Toggled');
//     },
//     open(initialValue, oninput, onclose){},
//     close(){},   
// };

// window.addEventListener('DOMContentLoaded', function(){
//     Keyboard.init();
// });
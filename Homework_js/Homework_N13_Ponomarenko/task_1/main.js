let color = document.querySelector('li');
let picture = color.nextElementSibling;
let bod = document.querySelector('body');
console.log(color);
let color_arr=['box0','box1','box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8']
let picture_arr=['box_0','box_1','box_2', 'box_3', 'box_4', 'box_5', 'box_6', 'box_7', 'box_8'];
// let del = document.getElementsByTag('html');
let main;


let checkPictureColor=true;
color.addEventListener('click',function(){

    if(checkPictureColor==true){
        main=document.createElement('div');
        main.classList.add('main');
        let box=[];
        for(let i=0; i<=8; i++){
        box=document.createElement('div');
        box.classList.add('box',color_arr[i]);
        let checkColor =true;
        box.addEventListener('mousedown',function(){
            
            bod.className=('');
        
        });
        box.addEventListener('mouseup',function(){
            bod.classList.add(color_arr[i]);
        });
           main.appendChild(box);
        }
        document.body.appendChild(main);
        checkPictureColor=false;    
      } 
    else{
        main.innerText='';
        bod.className=('');
        let box=[];
        for(let i=0; i<=8; i++){
        box=document.createElement('div');
        box.classList.add('box',color_arr[i]);
        let checkColor =true;
        box.addEventListener('mousedown',function(){
            bod.className=('');
        });
        box.addEventListener('mouseup',function(){
            bod.classList.add(color_arr[i]);
        });
        main.appendChild(box);
        }
           checkPictureColor=false;
    }
    });
    checkPictureColor=true;
picture.addEventListener('click',function(){

    if(checkPictureColor==true){
        main=document.createElement('div');
        main.classList.add('main');
        let box=[];
        for(let i=0; i<=8; i++){
        box=document.createElement('div');
        box.classList.add('box',picture_arr[i]);
        
        box.addEventListener('mousedown',function(){
            
            bod.className=('');
        });
        box.addEventListener('mouseup',function(){
            bod.classList.add(picture_arr[i]);
        });
        main.appendChild(box);
        }
        
        document.body.appendChild(main);
           
      } 
    else{
        main.innerText='';
        bod.style='';
        let box=[];
        for(let i=0; i<=8; i++){
        box=document.createElement('div');
        box.classList.add('box',picture_arr[i]);
        
        box.addEventListener('mousedown',function(){
            bod.className=('');
        });
        box.addEventListener('mouseup',function(){
            bod.classList.add(picture_arr[i]);
        });
        main.appendChild(box);
        }
        checkPictureColor=false;
    }
    });
 
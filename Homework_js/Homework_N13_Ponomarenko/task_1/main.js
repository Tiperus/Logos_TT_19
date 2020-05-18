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
        // box.style.backgroundColor=color_arr[i];
        let checkColor =true;
        box.addEventListener('click',function(){
        if(checkColor){
            // bod.style.backgroundColor=color_arr[i];    
            bod.classList.add(color_arr[i]);
            checkColor =false;
            }
        else{
            bod.classList.remove(color_arr[i]);
            checkColor =true;}
        });
        main.appendChild(box);
        }
        
        document.body.appendChild(main);
        checkPictureColor=false;    
      } 
    else{
        
        // console.log(document.querySelectorAll('main'));
        console.log(document.querySelector('.main'));
       
        for(let i=0; i<=8; i++){
            box.classList.remove(picture_arr[i]);
            box.classList.add('box',color_arr[i]);
            let checkColor =true;
            box.addEventListener('click',function(){
            if(checkColor){
                bod.classList.remove(picture_arr[i]);   
                bod.classList.add(color_arr[i]);
                checkColor =false;
                }
            else{
                bod.classList.remove(color_arr[i]);
                checkColor =true;}
            });
            main.appendChild(box);
            }



        // checkPictureColor=true;
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
        // box.style.backgroundColor=color_arr[i];
        let checkPicture =true;
        box.addEventListener('click',function(){
        if(checkPicture){
            // bod.style.backgroundColor=color_arr[i];    
            bod.classList.add(picture_arr[i]);
            checkPicture =false;
            }
        else{
            bod.classList.remove(picture_arr[i]);
            checkPicture =true;}
        });
        main.appendChild(box);
        }
        
        document.body.appendChild(main);
        checkPictureColor=false;    
      } 
    else{
        bod.classList.remove(color_arr[i]);
        bod.classList.remove(picture_arr[i]);

    }

    });
 

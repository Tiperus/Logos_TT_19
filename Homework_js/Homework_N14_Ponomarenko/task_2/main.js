manChecked =document.querySelector('#man');
// console.log(manChecked);
womanChecked =document.querySelector('#woman');
// console.log(womanChecked);
button =document.querySelector('button');
// console.log(button);
mainForm =document.querySelector('form')
// console.log(mainForm);
manChecked.addEventListener('change',function(){
    manChecked=true;
    womanChecked=false;
});
womanChecked.addEventListener('change', function(){
    manChecked=false;
    womanChecked=true;
})
let confirmControl;
confirmChecked =document.querySelector('#confirm');
// console.log(confirmChecked)
confirmChecked.addEventListener('click', function(){
    if(this.checked) confirmControl=true;
    else confirmControl=false
});


button.addEventListener('click', function(){
    if(confirmControl==true){
    if(manChecked==true){
       mainForm.setAttribute('class','disabled');
       let mansForm =document.createElement('form');
       mansForm.style = getComputedStyle(mainForm);
       let headMansForm =document.createElement('div');
       headMansForm.setAttribute('class', 'head_mans_form');
       let contentMansForm =document.createElement('div');
       contentMansForm.setAttribute('class', 'content_mans_form');
       for(let i = 0; i<3; i++){
        let contentMansFormWindow =document.createElement('p');
        contentMansFormWindow.setAttribute('class', `window_`+[i]+``)
        contentMansForm.appendChild(contentMansFormWindow)
        }


       let footerMansForm =document.createElement('div');
       footerMansForm.setAttribute('class', 'footer_mans_form');
       footerMansForm.innerHTML=`<i class="uil uil-facebook-f"></i><i class="uil uil-github-alt"></i><i class="uil uil-linkedin-alt"></i>`;
       let buttonMansForm =document.createElement('button');
       buttonMansForm.setAttribute('type', 'button');
       buttonMansForm.setAttribute('class', 'sing_up');
       buttonMansForm.innerText='Sing Out';

       mansForm.appendChild(headMansForm);
       mansForm.appendChild(contentMansForm);
       mansForm.appendChild(buttonMansForm);
       mansForm.appendChild(footerMansForm);
       

       document.body.appendChild(mansForm);

       contentMansFormWindow_1=document.querySelector('.window_0');
    //    console.log(contentMansFormWindow_1);
       nameFromInput=document.querySelector('#first_name ');
       snameFromInput=document.querySelector('#second_name');
       contentMansFormWindow_2=document.querySelector('.window_1');
       emailFromInput=document.querySelector('#email');
       contentMansFormWindow_3=document.querySelector('.window_2');
       selectFromInput=document.querySelector('select');
       
       contentMansFormWindow_1.innerText = nameFromInput.value +' '+ snameFromInput.value;
       contentMansFormWindow_2.innerText = emailFromInput.value;
       contentMansFormWindow_3.innerText = selectFromInput.value;

       buttonMansForm.addEventListener('click', function(){
        console.log(mainForm);
        mainForm.setAttribute('class', 'persone_cart');
        console.log(mainForm);
        mansForm.setAttribute('class', 'disabled');
        mainForm.reset();
       });
    }
}
});
button.addEventListener('click', function(){
    if(confirmControl==true){
    if(womanChecked==true){
       mainForm.setAttribute('class','disabled');
       let womansForm =document.createElement('form');
       womansForm.style = getComputedStyle(mainForm);
       let headWomansForm =document.createElement('div');
       headWomansForm.setAttribute('class', 'head_womans_form');
       let contentWomansForm =document.createElement('div');
       contentWomansForm.setAttribute('class', 'content_mans_form');
       for(let i = 0; i<3; i++){
        let contentWomansFormWindow =document.createElement('p');
        contentWomansFormWindow.setAttribute('class', `window_w_`+[i]+``)
        contentWomansForm.appendChild(contentWomansFormWindow)
        }


       let footerWomansForm =document.createElement('div');
       footerWomansForm.setAttribute('class', 'footer_mans_form');
       footerWomansForm.innerHTML=`<i class="uil uil-facebook-f"></i><i class="uil uil-github-alt"></i><i class="uil uil-linkedin-alt"></i>`;
       let buttonWomansForm =document.createElement('button');
       buttonWomansForm.setAttribute('type', 'button');
       buttonWomansForm.setAttribute('class', 'sing_up');
       buttonWomansForm.innerText='Sing Out';

       womansForm.appendChild(headWomansForm);
       womansForm.appendChild(contentWomansForm);
       womansForm.appendChild(buttonWomansForm);
       womansForm.appendChild(footerWomansForm);
       

       document.body.appendChild(womansForm);

       contentWomansFormWindow_1=document.querySelector('.window_w_0');
       console.log(contentWomansFormWindow_1);
       nameFromInput=document.querySelector('#first_name ');
       snameFromInput=document.querySelector('#second_name');
       contentWomansFormWindow_2=document.querySelector('.window_w_1');
       emailFromInput=document.querySelector('#email');
       contentWomansFormWindow_3=document.querySelector('.window_w_2');
       selectFromInput=document.querySelector('select');
       
       contentWomansFormWindow_1.innerText = nameFromInput.value +' '+ snameFromInput.value;
       contentWomansFormWindow_2.innerText = emailFromInput.value;
       contentWomansFormWindow_3.innerText = selectFromInput.value;
       console.log(buttonWomansForm);
       buttonWomansForm.addEventListener('click', function(){
        console.log(buttonWomansForm);
        mainForm.setAttribute('class', 'persone_cart');
        console.log(mainForm);
        womansForm.setAttribute('class', 'disabled');
        mainForm.reset();
       });
    }
}
});

let getSel=(sel) => document.querySelector(sel);

let firstName = getSel('#first_name')
let firstNameLabel=document.querySelector("#first_name_label")
let firstNameFrame=document.querySelector("#first_name_div")
console.log(firstNameLabel)

firstName.addEventListener('focus', function(){
    firstNameLabel.classList.remove('disabled');
    firstNameLabel.classList.add('label');
    firstNameFrame.classList.remove('input_frame');
    firstNameFrame.classList.add('input_frame_active');
    firstName.removeAttribute("placeholder");
});

let secondName = getSel('#second_name')
let secondNameLabel=document.querySelector("#second_name_label")
let secondNameFrame=document.querySelector("#second_name_div")
console.log(secondName)
secondName.addEventListener('focus', function(){
    secondNameLabel.classList.remove('disabled');
    secondNameLabel.classList.add('label');
    secondNameFrame.classList.remove('input_frame');
    secondNameFrame.classList.add('input_frame_active');
    secondName.removeAttribute("placeholder");  
});

let email =getSel('#email');
let emailLabel =getSel('#email_label');
let emailFrame =getSel('#email_div');

email.addEventListener('focus', function(){
    emailLabel.classList.remove('disabled');
    emailLabel.classList.add('label');
    emailFrame.classList.remove('input_frame');
    emailFrame.classList.add('input_frame_active');
    email.removeAttribute("placeholder");   
});

let phone=getSel('#phone');
let phoneLabel =getSel('#phone_label');
let phoneFrame =getSel('#phone_div');

phone.addEventListener('focus', function(){
    phoneLabel.classList.remove('disabled');
    phoneLabel.classList.add('label');
    phoneFrame.classList.remove('input_frame');
    phoneFrame.classList.add('input_frame_active');
    phone.removeAttribute("placeholder");     
})

let password=getSel('#password');
let passwordLabel =getSel('#password_label');
let passwordFrame =getSel('#password_div');

password.addEventListener('focus', function(){
    passwordLabel.classList.remove('disabled');
    passwordLabel.classList.add('label');
    passwordFrame.classList.remove('input_frame');
    passwordFrame.classList.add('input_frame_active');
    password.removeAttribute("placeholder");     
})

let singUp=document.forms["singUp"]["btnSingUp"]
console.log(singUp);
singUp.addEventListener('click',function(){
    let valName=/^[A-Z][a-z]+$/;
    
    if(valName.test(firstName.value)){
        
        firstNameFrame.setAttribute('class','input_frame_acces');
     }
     else{
        firstNameFrame.setAttribute('class','input_frame_error'); 
     }

     let  valSecondName=/^[A-Z][a-z]+$/;

     if(valSecondName.test(secondName.value)){
        secondNameFrame.setAttribute('class','input_frame_acces');
     }
    else{
        secondNameFrame.setAttribute('class','input_frame_error');
    }

    let  valEmail=/^(\w+)@\w+(\.[a-z]{2,3})$/i;
    

    if(valEmail.test(email.value)){
        emailFrame.setAttribute('class','input_frame_acces');
    }
   else{
        emailFrame.setAttribute('class','input_frame_error');
   }
    let  valPhone=/(\+38)?\(?0\d{2}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})$/;

    if(valPhone.test(phone.value)){
        phoneFrame.setAttribute('class','input_frame_acces');
    }
   else{
        phoneFrame.setAttribute('class','input_frame_error');
   }
    let  valPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(valPassword.test(password.value)){
        passwordFrame.setAttribute('class','input_frame_acces');
    }
   else{
        passwordFrame.setAttribute('class','input_frame_error');
   }

     






});
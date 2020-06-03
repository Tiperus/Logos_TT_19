let getSel=(sel) => document.querySelector(sel);
let userForm=document.forms['singUp'];
let firstName = getSel('#first_name')
let firstNameLabel=document.querySelector("#first_name_label")
let firstNameFrame=document.querySelector("#first_name_div")
let table= document.querySelector('#table_body');
let user=[];
let index;
// console.log(userForm)

firstName.addEventListener('focus', function(){
    firstNameLabel.classList.remove('disabled');
    firstNameLabel.classList.add('label');
    firstNameFrame.classList.remove('input_frame');
    firstNameFrame.classList.add('input_frame_active');
    firstName.removeAttribute("placeholder");
});
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

let checkSingUp=true;
let singUp=document.forms["singUp"]["btnSingUp"]
// console.log(singUp);
singUp.addEventListener('click',function(){
if(checkSingUp){  
    let log= firstName.value;
    let pas= password.value;
    let mail= email.value;
    let newUser=   new User(log,pas,mail);
    user.push(newUser);
    // console.log(user);
    render();
    firstName.value='';
    password.value='';
    email.value='';

}
else{
    let log= firstName.value;
    let pas= password.value;
    let mail= email.value;
    let oldUser=   new User(log,pas,mail);
    user.splice(index,1,oldUser)
    render();
    checkSingUp=true;
    firstName.value='';
    password.value='';
    email.value='';
}
});

function render(){
    table.innerHTML='';
    for(let i=0; i<user.length; i++){
        let tr=document.createElement('tr');
        let td=document.createElement('td');
        td.innerText=+i+1;
        td.setAttribute('class','id')
        tr.appendChild(td);
        for(let key in user[i]){
            // console.log(user[i][key])
            let usTD=document.createElement('td');
            usTD.innerText=user[i][key];
            usTD.setAttribute('class', `styl_`+[key]+``)
            tr.appendChild(usTD);
        }
        let tdEdit=`<td class='td_button'><button onclick='editUser(${i})' class="button_insite">Edit</button></td>`
        
        tr.innerHTML+=tdEdit;
        let tdDelete=`<td class='td_button'><button onclick='deleteUser(${i})' class="button_insite">Delete</button></td>`

        tr.innerHTML+=tdDelete;

        table.appendChild(tr);

    }
}

function editUser(id){
    firstName.value=user[id].login;
    password.value=user[id].password;
    email.value=user[id].email;
    index=id;
    checkSingUp=false;
}



function deleteUser(id){
    user.splice(id,1);
    render()
}

function User(log,pas,mail){
    this.login=log;
    this.password =pas;
    this.email =mail;
}
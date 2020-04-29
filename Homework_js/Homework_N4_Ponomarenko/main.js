let password=+prompt('write password'), step=4, admin=1111, i=1;
if(admin==password) alert("Ласкаво просимо!")
else {
do{
    step--;
    if(i==step) alert("Спробуйте пізніше");
    else{
        alert(`Вам залишилось${step}спроби`)
        if(i<=step) password=+prompt('write password')
    }
    
    
    }

while(i<step);
}
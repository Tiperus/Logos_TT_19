let name=prompt("Введіть електронну адресу")

for(let i=0; i<name.length; i++){
    if(name.charAt(i)=="@") {
        if (i==0) {alert("Емаіл не вірний"); break}
        else if (i==name.length-1) alert("Емаіл не вірний");
        else alert("Емаіл вірний");
    }
    else alert("Емаіл не вірний");
}
    
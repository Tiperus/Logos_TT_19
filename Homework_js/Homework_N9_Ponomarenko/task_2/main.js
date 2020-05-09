let name=prompt("Введіть електронну адресу")
if (name.startsWith("@")==true) alert("Email - wrong");
else if (name.endsWith("@")==true) alert("Email - wrong");
else if (name.includes("@")==true) alert("Email - correct");
else alert("Email - wrong");

// Other possibility


// let name=prompt("Введіть електронну адресу")

// for(let i=0; i<name.length; i++){
//     if(name.charAt(i)=="@") {
//         if (i==0) {alert("Емаіл не вірний"); break}
//         else if (i==name.length-1) alert("Емаіл не вірний");
//         else alert("Емаіл вірний");
//     }
//     else alert("Емаіл не вірний");
// }
    
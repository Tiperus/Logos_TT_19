let mounth = +prompt("Введіть число менше 12");

if (mounth < 1 && mounth > 12 ) ;
    else if(mounth===1||mounth===2||mounth===12)alert("Зима")
    else if(mounth >= 3 && mounth<=5) alert("Весна")
    else if(mounth >= 6 && mounth<=8) alert("Літо")
    else if(mounth >= 9 && mounth<=11) alert("Осінь")
else {alert("такого місяця не існує")}


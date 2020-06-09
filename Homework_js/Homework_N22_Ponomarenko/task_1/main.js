
let color=['navy', 'blue', 'maroon', 'lime',  'teal', 'black', 'green', 'olive', 'yellow', 'red'];
let coloreVar;
let leftBorder;
let bottomBorder;
let borderRad;

$('.ball').on('click', function(){
    random=((Math.random()*100).toFixed());
     if(random>50) borderRad=random-20;
     else borderRad=random; 

    random1=((Math.random()*100).toFixed());
    if(random1>=85) leftBorder=+random1-20;
    else if(random1<=5) leftBorder=+random1+20;
    else leftBorder=random1;

    console.log(leftBorder)
    random2=((Math.random()*100).toFixed());
    if(random2>=85)bottomBorder=+random2-30;
    else if(random2<=15) bottomBorder=+random2+20;
    else bottomBorder=random2
    console.log(bottomBorder)

    random4=((Math.random()*10).toFixed());
    coloreVar=random4;

    $('.ball').animate({
        left: leftBorder+'%',
        top: bottomBorder+'%',
        width: ((Math.random()*100+100).toFixed())+'px',
        height: ((Math.random()*100+100).toFixed())+'px',
        borderRadius: borderRad+'%',
        backgroundColor: color[coloreVar]
    },2000)

})


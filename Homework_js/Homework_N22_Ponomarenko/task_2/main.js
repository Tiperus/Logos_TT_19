
let color=['navy', 'blue', 'maroon', 'lime',  'teal', 'black', 'green', 'olive', 'yellow', 'red'];
let typeBorder=['solid', 'dashed', 'dotted', 'double', 'groove', 'inset', 'outset', 'ridge', 'dotted', 'double']
let coloreVar;
let leftBorder;
let bottomBorder;
let borderRad;

let myInteval=setInterval(myRandom,2000)

function myRandom(){
    random=((Math.random()*100).toFixed());
     if(random>50) borderRad=random-20;
     else borderRad=random; 

    random1=((Math.random()*100).toFixed());
    if(random1>=85) leftBorder=+random1-20;
    else if(random1<=5) leftBorder=+random1+20;
    else leftBorder=random1;

    
    random2=((Math.random()*100).toFixed());
    if(random2>=85)bottomBorder=+random2-30;
    else if(random2<=15) bottomBorder=+random2+20;
    else bottomBorder=random2
    // console.log(bottomBorder)

    random4=((Math.random()*10).toFixed());
    coloreVar=random4;   

    random5=((Math.random()*10+2).toFixed());
    random6=((Math.random()*10).toFixed());
    random7=((Math.random()*10).toFixed());
    random8=((Math.random()*10).toFixed());
    let type= typeBorder[random6];
    let coloreVarBord=color[random7];
        $('.ball').animate({
        left: leftBorder+'%',
        top: bottomBorder+'%',
        width: ((Math.random()*100+100).toFixed())+'px',
        height: ((Math.random()*100+100).toFixed())+'px',
        borderRadius: borderRad+'%',
        backgroundColor: color[coloreVar],
        borderWidth: random5+'px',
        borderStyle: type,
        borderColor: coloreVarBord,
        // boxShadow: random8,
        boxShadow: coloreVarBord,
        // boxShadow: random7, 



    },2000)
    
        console.log(type),
        console.log(coloreVarBord)

};

$('.ball').on('click',function(e){
    clearInterval(myInteval)
})







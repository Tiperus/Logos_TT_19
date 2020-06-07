let clock=document.querySelector('.main_clock');
let calendar=document.querySelector('.calendar');
let seconds=document.querySelector('.seconds');

setInterval(function(){
        let time = new Date();
        let y = time.getFullYear();
        let mo = time.getMonth()+1;
        let d = time.getUTCDate();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        if (mo < 10 ) mo= '0'+ mo;
        if ( h < 10 ) h= '0'+ h;
        if ( m < 10 ) m= '0'+ m;
        if ( s < 10 ) s= '0'+ s;
        clock.innerHTML = `<span class="clock_numb">${h}:${m}:${s}</span>`;
        calendar.innerHTML=`<h2>${y}/${mo}/${d}<h2>`;
        

    },100)

    let start=document.querySelector('#start')
    let stop=document.querySelector('#stop')
    // console.log(start);
    // let seconds=document.querySelector('.seconds')
    secondsParag=document.querySelector('.seconds')
    // console.log(secondsParag);
    let myTime;
    start.addEventListener('click', function(){
    
    myTime= setInterval(calcSecun,1000);

    });
    let sec = 0;
    let min = 0;

    function calcSecun(){
        

        sec++;
        if(sec>59){ min++; sec=0};
        // if (min < 10) min = "0" + min;
        if ( sec < 10 ) sec= '0'+ sec;
        if(min>59){min=0;}
        

        seconds.innerHTML=`<span class='seconds_span'>${min}:${sec}</span>`;     

    };
    

    stop.addEventListener('click', function(){
            clearInterval(myTime)
        })
    let memory=document.querySelector('#memory')
    let windowMemory1=document.querySelector('.memory_window_1')
    let windowMemory2=document.querySelector('.memory_window_2')
    let checkMemory =true;
    
    memory.addEventListener('click', function(){
        if(checkMemory){
            windowMemory1.innerText=seconds.innerText
            checkMemory =false;
        }
        else{windowMemory2.innerText=seconds.innerText
            checkMemory =true;
        }
    });

    let clear=document.querySelector('#clear');
    // console.log(clear);
    clear.addEventListener('click', function(){
        windowMemory1.innerText='';
        windowMemory2.innerText='';
        seconds.innerText='';
        sec = 0;
        min = 0;
        clearInterval(myTime);
    });

    let timerIncrNumber=document.querySelector('#time_number_btn_incr');
    let timerNumber=document.querySelector('.timer_number');
    // console.log(timerNumber);
    timerIncrNumber.addEventListener('click', function(){
        timerNumber.innerHTML=+timerNumber.innerHTML+1;
    });

    let timerDecrNumber=document.querySelector('#time_number_btn_decr');
    // console.log(timerDecrNumber);
    timerDecrNumber.addEventListener('click', function(){
        if(+timerNumber.innerHTML>0){
        timerNumber.innerHTML=+timerNumber.innerHTML-1;
        }
    });

    let timerDisplayNumberMin =document.querySelector('.timer_display_number');
    console.log(timerDisplayNumberMin);
    // timerDisplayNumberMin.innerText='0'+'0';
    let timerDisplaySeconds =document.querySelector('.timer_display_seconds');
    // timerDisplaySeconds.innerText='0'+'0';
    let buttonStart_2 =document.querySelector('#start_2');
    let buttonStop_2 =document.querySelector('#stop_2');
    let secund = 60;
    let minut;    
    let myTimer;
    buttonStart_2.addEventListener('click', function(){
        timerDisplayNumberMin.innerHTML=+timerNumber.innerHTML
        myTimer= setInterval(calcTimer,1000);
        
        minut = +timerNumber.innerHTML;

    });

    buttonStop_2.addEventListener('click', function(){
        clearInterval(myTimer);
        console.log(buttonStop_2);
        // timerDisplayNumberMin.innerText='0'+'0';
        // timerDisplaySeconds.innerText='0'+'0';
    })



    function calcTimer(){
        
         
        secund--;
        if(secund==0){ minut--; secund=60};
        // if (min < 10) min = "0" + min;
        if ( secund < 10 ) secund= '0'+ secund;
        if(minut==0){clearInterval(myTimer); secund=0}
        

        timerDisplayNumberMin.innerHTML=`${minut}`;     
        timerDisplaySeconds.innerHTML=`${secund}`;     

    };

    let clearTimer=document.querySelector('#clear_2');
    clearTimer.addEventListener('click', function(){
        clearInterval(myTimer);
        timerDisplayNumberMin.innerHTML=``;     
        timerDisplaySeconds.innerHTML=``;
        timerNumber.innerHTML=``; 
        secund = 60;

    });
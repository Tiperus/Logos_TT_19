 let number=2;
$(function(){
   $('.box_number').css({
        color: 'white',
        fontSize: '40px',
        fontFamily: 'fantasy',
    })
    $('.box_number').text(number)
    console.log(number)    
    $('.slide').animate({
        height:0,
    
    },60000).animate({
        height:'234px', 
    },60000);
     changeNumber()     
})
function changeNumber(){
    let minut=2;
    let secund=60;
    myTimer= setInterval(calcTimer,1000);
    function calcTimer(){
        
        
        secund--;
        if(secund==0){ minut--; secund=60};
        if ( secund < 10 ) secund= '0'+ secund;
        if(minut==0){clearInterval(myTimer); secund=0}
        

        $('.box_number').text(minut);     
           

    };
      
    }; 
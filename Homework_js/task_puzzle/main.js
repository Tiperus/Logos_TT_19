$('#box1').css('order', (Math.random()*100).toFixed() )
$('#box2').css('order', (Math.random()*100).toFixed() )
$('#box3').css('order', (Math.random()*100).toFixed() )
$('#box4').css('order', (Math.random()*100).toFixed() )
$('#box5').css('order', (Math.random()*100).toFixed() )
$('#box6').css('order', (Math.random()*100).toFixed() )
$('#box7').css('order', (Math.random()*100).toFixed() )
$('#box8').css('order', (Math.random()*100).toFixed() )
$('#box9').css('order', (Math.random()*100).toFixed() )
$('#box10').css('order', (Math.random()*100).toFixed() )
$('#box11').css('order', (Math.random()*100).toFixed() )
$('#box12').css('order', (Math.random()*100).toFixed() )
$('#box13').css('order', (Math.random()*100).toFixed() )
$('#box14').css('order', (Math.random()*100).toFixed() )
$('#box15').css('order', (Math.random()*100).toFixed() )
$('#box16').css('order', (Math.random()*100).toFixed() )
console.log((Math.random()*100).toFixed())
$('.part').draggable({
    // containment: '.trg',
    grid: [100,100]
})

$('.trg').droppable({
    accept: '.part',
    // containment: [0,0,100,100],
    
});
$(function(){
    $('.dws-progress-bar').circularProgress({
        color: 'green',
        line_width: 20,
        width: '400px',
        height: '400px',
        percent:0,
        // counter_clockwise: true,
        // starting_position: 30

    }).circularProgress('animate', 100, 4000)
    

})
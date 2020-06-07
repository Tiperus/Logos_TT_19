$('.part').draggable({
    // containment: '.trg',
    grid: [100,100]
})

$('.trg').droppable({
    accept: '.part',
    // containment: [0,0,100,100],
    
});
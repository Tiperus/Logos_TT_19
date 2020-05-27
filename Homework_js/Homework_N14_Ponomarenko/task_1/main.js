let moveButton =document.forms['move']['button'];
let moveTaget =document.forms['move']["taget"];
let moveSource =document.forms['move']["text"];
let placeholderSource =document.forms['move']["placeholder"]
console.log(placeholderSource);
moveButton.addEventListener('click', function(){
    if(moveSource!=""){
    moveTaget.value+=moveSource.value;
    moveSource.value=""
    }
});
placeholderSource.addEventListener('blur',function(){
    moveSource.placeholder=placeholderSource.value;
});
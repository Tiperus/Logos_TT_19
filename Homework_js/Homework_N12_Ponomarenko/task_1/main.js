let getDiv=document.querySelector('div');

getDiv.style.position = 'absolute';
getDiv.style.top = '25%';
getDiv.style.left = '35%';
getDiv.style.width = '300px';
getDiv.style.height = '300px';
getDiv.style.backgroundColor = 'purple';
let i=0;
let color = ['red', 'yellow', 'green'];
getDiv.onmouseover = function (){
  this.style.backgroundColor=color[i];
  i++;
    if(i>2)i = 0;
  }

getDiv.onmouseout = function (){
      this.style.backgroundColor='purple';
  }

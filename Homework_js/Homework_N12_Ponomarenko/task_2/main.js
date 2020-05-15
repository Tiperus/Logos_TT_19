let getDiv=document.querySelector('div');
let getP=document.querySelector('p');

getDiv.style.position = 'absolute';
getDiv.style.top = '25%';
getDiv.style.left = '35%';
getDiv.style.width = '300px';
getDiv.style.height = '300px';
getDiv.style.backgroundColor = 'purple';
getP.style.fontSize='18px'
getP.style.textAlign='center'
getP.style.textJustify='center'


getDiv.onmouseenter = function (){
  getP.innerText='Хочеш знати який?';
}
getDiv.onmousedown = function (){
  getP.innerText='А я тобі не скажу';
  }
getDiv.onmouseup = function (){
  getP.innerText='Хочеш знати який?';
  }
// getDiv.onmouseout = function(){
//         this.style.backgroundColor = 'red'
//     }

getDiv.onmouseleave = function (){
  getP.innerText='В мене є секрет!';
  }

  // link.innerText = "<b>Google</b>";
  // let tagDiv=document.createElement('div');
  // let tagP=document.createElement('p');
  // tagP.innerText='Create Element';
  // tagP.style.color='yellow';
  // tagDiv.appendChild(tagP);
  // document.body.appendChild(tagDiv);
  // console.log(tagDiv);
  // getSel('.box').onmouseenter = function (){
    //     this.style.backgroundColor='green';
    // } 
    // getSel('.box').onmouseleave = function (){
    //     this.style.backgroundColor='red';
    // } 
    // getSel('.box').onmousedown = function (){
    //     this.style.backgroundColor='green';
    // } 
    // getSel('.box').onmouseup = function (){
    //     this.style.backgroundColor='red';
    // }   
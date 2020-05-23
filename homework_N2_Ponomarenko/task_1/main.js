let topBox = document.querySelector('.top_box');
// console.log(topBox)
let buttonEdit=document.querySelector('.bt_edit');
let buttonStyle=document.querySelector('.bt_style');
let bottomBox=document.querySelector('.bottom_box');
let bottomText=document.forms["bottom_box"].bottom_text;
let fontSize = ['12px', '14px', '16px', '18px', '20px' ];
let fontSizeClass=['font_size_0','font_size_1','font_size_2','font_size_3','font_size_4'];
let fontFamily = [];
let getSel = (sel) => document.querySelector(sel);
let bottomBoxStyle;

let checkButtonEdit =true;
buttonEdit.addEventListener('click', function(){
    if(checkButtonEdit){
    
        bottomText.value = topBox.innerHTML;

        let bottomBoxButton=document.createElement('div');
        bottomBoxButton.classList.add('bottom_box_button')
    
        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'button')
        buttonAdd.innerText='add';
        buttonAdd.classList.add('button_bottom--add');
    
        let buttonSave = document.createElement('button');
        buttonSave.setAttribute('type', 'button')
        buttonSave.innerText='save';
        buttonSave.classList.add('button_bottom--save');
    
        bottomBoxButton.appendChild(buttonAdd);
        bottomBoxButton.appendChild(buttonSave);

        bottomBox.appendChild(bottomBoxButton);

        // console.log(bottomText);
        // console.log(bottomBoxButton);
        // console.log(buttonSave);
        // buttonSave.onclick = function(){
        //     topBox.innerHTML = bottomText.value;
        // }
        buttonSave.addEventListener('click', function(){
            topBox.innerHTML = bottomText.value;
        });

        checkButtonEdit =false;


    }
    else{
        let bottomBoxButton = bottomText.nextElementSibling;
        bottomText.setAttribute('class','bottom_text');
        bottomBoxButton.setAttribute('class','bottom_box_button');
        bottomBoxStyle.setAttribute('class','disabled');

    }
    });

    






    let checkButtonStyle =true;
    buttonStyle.addEventListener('click', function(){
    if(checkButtonStyle){
        let bottomBoxButton = bottomText.nextElementSibling
        bottomText.setAttribute('class','disabled');
        bottomBoxButton.setAttribute('class','disabled');
    
        bottomBoxStyle = document.createElement('form');
        bottomBoxStyle.setAttribute('class', 'bottom_text bottom_style');

            bottomBoxStyleFontSize =document.createElement('div');
            bottomBoxStyleFontSize.setAttribute('class', 'bottom_style_box_fontsize');

            bottomBoxStyleFontSizeTitle =document.createElement('h4');
            bottomBoxStyleFontSizeTitle.setAttribute('class','font_size_box_title')
            bottomBoxStyleFontSizeTitle.innerText='Font Size:';

            bottomBoxStyleFontSizeBoxButton =document.createElement('div');
            bottomBoxStyleFontSizeBoxButton.setAttribute('class', 'font_size_box_span');
            for(let i=0; i<5; i++){
            bottomBoxStyleFontSizeSpanButton=document.createElement('span');
            bottomBoxStyleFontSizeSpanButton.setAttribute('class','font_size_box_span--span' )

            bottomBoxStyleFontSizeSpanButton.innerHTML = `<input type="radio" name="fs" id="check`+[i]+`" style="margin-right: 5px"><label for="check'`+[i]+`" style="margin-right: 10px">`+fontSize[i]+`</label>`;
            bottomBoxStyleFontSizeBoxButton.appendChild(bottomBoxStyleFontSizeSpanButton);

            }
            bottomBoxStyle.appendChild(bottomBoxStyleFontSizeTitle);
            bottomBoxStyle.appendChild(bottomBoxStyleFontSizeBoxButton);
            
            // ________________________________________________
            
            bottomBoxStyleFontFamilyTitle =document.createElement('h4');
            bottomBoxStyleFontFamilyTitle.setAttribute('class','font_family_box_title');
            bottomBoxStyleFontFamilyTitle.innerText='Font Family:';

            bottomBoxStyleFontFamilySelect =document.createElement('select');
            bottomBoxStyleFontFamilySelect.setAttribute('class', 'bottom_style_box_font_family-select');
            for(let i=0; i<5; i++){
                bottomBoxStyleFontFamilySelect.innerHTML = `<option name="selectOption" value="option`+[i]+` id="check`+[i]+`">`+fontFamily[i]+`</option>`;
                // bottomBoxStyleFontFamilySelect.appendChild() 
            }
           



            

            bottomBoxStyle.appendChild(bottomBoxStyleFontFamilyTitle);
            bottomBoxStyle.appendChild(bottomBoxStyleFontFamilySelect)


            bottomBox.appendChild(bottomBoxStyle);

            for(let i=0; i<5; i++){
                bottomBoxStyleFontSizeRadioButton = document.querySelector('#check'+[i]);
                // console.log(bottomBoxStyleFontSizeRadioButton)
                bottomBoxStyleFontSizeRadioButton.addEventListener('change',function(){
                    
                    
                    let arrTopBoxClassList =topBox.className.split(' ')
                    arrTopBoxClassList.forEach((TopBoxClass,i,arrTopBoxClassList)=>{
                        
                        if(fontSizeClass.forEach)((fSC,x,fontSizeClass)=>{TopBoxClass[i]==fSC[x]});{
                        
                            topBox.classList.remove('font_size_'+[i]+'')
                        }
                    });
                    
                    console.log(i)
                    console.log(arrTopBoxClassList)
                    
                    topBox.classList.add('font_size_'+[i]);
                });
            }
                



            // bottomBoxStyleFontSizeSpanButtonFirst = document.querySelector('#check0');
            // console.log(bottomBoxStyleFontSizeSpanButtonFirst);
            // bottomBoxStyleFontSizeSpanButtonFirst.setAttribute('checked');
    

        checkButtonStyle =false;
        checkButtonEdit =false;
    }
    else{
        let bottomBoxButton = bottomText.nextElementSibling
        bottomText.setAttribute('class','disabled');
        bottomBoxButton.setAttribute('class','disabled');
        bottomBoxStyle.setAttribute('class','bottom_text bottom_style');
    }  


    });
let topBox = document.querySelector('.top_box');
// console.log(topBox)
let buttonEdit=document.querySelector('.bt_edit');
let buttonStyle=document.querySelector('.bt_style');
let bottomBox=document.querySelector('.bottom_box');
let bottomText=document.forms["bottom_box"].bottom_text;
let fontSize = ['12px', '14px', '16px', '18px', '20px' ];
// let fontSizeClass=['font_size_0','font_size_1','font_size_2','font_size_3','font_size_4'];
let fontFamilyClass = ['choose option', 'cursive', 'fantasi', 'monospase', 'sens-serif'];
let styleFonds = ['Bold text', 'Cursive text'];
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
                bottomBoxStyleFontFamilySelectOption=document.createElement('option');
                bottomBoxStyleFontFamilySelectOption.setAttribute('name',"selectOption");
                bottomBoxStyleFontFamilySelectOption.setAttribute('value',`font_family_`+[i]+``);
                bottomBoxStyleFontFamilySelectOption.setAttribute('id',`option`+[i]+``);
                bottomBoxStyleFontFamilySelectOption.innerHTML = fontFamilyClass[i];
                bottomBoxStyleFontFamilySelect.appendChild(bottomBoxStyleFontFamilySelectOption); 
            }

            bottomBoxStyle.appendChild(bottomBoxStyleFontFamilyTitle);
            bottomBoxStyle.appendChild(bottomBoxStyleFontFamilySelect)


            bottomBoxStyleColorTitle =document.createElement('h4');
            bottomBoxStyleColorTitle.setAttribute('class', 'colors_box_title');
            bottomBoxStyleColorTitle.innerText ='Colors:';
            bottomBoxStyleColorBoxButton =document.createElement('div');
            bottomBoxStyleColorBoxButton.setAttribute('class', 'bottom_box_style_color_box_button');
            bottomBoxStyleColorBoxButtonBtnColorText =document.createElement('button');
            bottomBoxStyleColorBoxButtonBtnColorText.setAttribute('type', 'button');
            bottomBoxStyleColorBoxButtonBtnColorText.setAttribute('class', 'bottom_box_style_color_box_button-btncolortext');
            bottomBoxStyleColorBoxButtonBtnColorText.innerText ='Color of Text';
            bottomBoxStyleColorBoxButtonBtnColorBackground =document.createElement('button');
            bottomBoxStyleColorBoxButtonBtnColorBackground.setAttribute('type', 'button');
            bottomBoxStyleColorBoxButtonBtnColorBackground.setAttribute('class', 'bottom_box_style_color_box_button-btncolorbackground');
            bottomBoxStyleColorBoxButtonBtnColorBackground.innerText="Background color";

            bottomBoxStyleColorBoxButton.appendChild(bottomBoxStyleColorBoxButtonBtnColorText);
            bottomBoxStyleColorBoxButton.appendChild(bottomBoxStyleColorBoxButtonBtnColorBackground);
            
            bottomBoxStyle.appendChild(bottomBoxStyleColorTitle);
            bottomBoxStyle.appendChild(bottomBoxStyleColorBoxButton);


            bottomBoxStyleFontStyleTitle =document.createElement('h4');
            bottomBoxStyleFontStyleTitle.setAttribute('class', 'font_style_box_title');
            bottomBoxStyleFontStyleTitle.innerText='Style:';
            bottomBoxStyleFontStyleBoxCheckBox =document.createElement('div');
            bottomBoxStyleFontStyleBoxCheckBox.setAttribute('class', 'font_style_box_box');
            for(let i=0; i<2; i++){
                bottomBoxStyleFontStyleBoxCheckBoxSpan=document.createElement('span');
                bottomBoxStyleFontStyleBoxCheckBoxSpan.innerHTML = `<input type="checkbox" name="ch" id="checkStyle`+[i]+`" style="margin-right: 5px"><label for="checkStyle'`+[i]+`" style="margin-right: 10px">`+styleFonds[i]+`</label>`;
                bottomBoxStyleFontStyleBoxCheckBox.appendChild(bottomBoxStyleFontStyleBoxCheckBoxSpan);

            }


            bottomBoxStyle.appendChild(bottomBoxStyleFontStyleTitle)
            bottomBoxStyle.appendChild(bottomBoxStyleFontStyleBoxCheckBox)


            bottomBox.appendChild(bottomBoxStyle);
            // ________________________________________________textSizeButton
            for(let i=0; i<5; i++){
                bottomBoxStyleFontSizeRadioButton = document.querySelector('#check'+[i]);
                // console.log(bottomBoxStyleFontSizeRadioButton)
                bottomBoxStyleFontSizeRadioButton.addEventListener('change',function(){
                    
                    
                    let arrTopBoxClassList =topBox.className.split(' ')
                    arrTopBoxClassList.forEach(key =>{
                    const fontSizeClass = ['font_size_0','font_size_1','font_size_2','font_size_3','font_size_4'].indexOf(key)!==-1;
                    if(fontSizeClass){
                        topBox.classList.remove(key)
                        console.log(key)
                        
                    }
                    });
                    
                    topBox.classList.add('font_size_'+[i]);
                    
                });
            }
            // _______________________________________________textStyleSelector

            bottomBoxStyleFontFamilySelect = document.querySelector('.bottom_style_box_font_family-select')
            // console.log(bottomBoxStyleFontFamilySelect);
            bottomBoxStyleFontFamilySelect.addEventListener('change',function(){
                let arrTopBoxClassList =topBox.className.split(' ')
                    arrTopBoxClassList.forEach(key =>{
                    const fontSizeClass = ['font_family_0','font_family_1','font_family_2','font_family_3','font_family_4'].indexOf(key)!==-1;
                    if(fontSizeClass){
                        topBox.classList.remove(key)
                        // console.log(key)
                        
                    }
                    });
                  topBox.classList.add(this.value);

            });

        // _______________________________________________ColorButton
            
        bottomBoxStyleColorBoxButtonBtnColorText =document.querySelector('.bottom_box_style_color_box_button-btncolortext');
        console.log( bottomBoxStyleColorBoxButtonBtnColorText);
        bottomBoxStyleColorBoxButtonBtnColorText.addEventListener('click',function(){

            

        });
                


            // bottomBoxStyleFontSizeSpanButtonFirst = document.querySelector('#check2');
            // console.log(bottomBoxStyleFontSizeSpanButtonFirst);
            // bottomBoxStyleFontSizeSpanButtonFirst.setAttribute('check','checked');
    

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
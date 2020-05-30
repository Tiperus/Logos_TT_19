let mainBox =document.querySelector('#main')
let topBox = document.querySelector('#top_box');
let buttonEdit=document.querySelector('#bt_edit');
let buttonStyle=document.querySelector('#bt_style');
let bottomBox=document.forms['bottom_box'];
let bottomBoxStyle=document.forms['bottom_box_style'];
// console.log(mainBox)
let bottomText=document.forms["bottom_box"].bottom_text;
let boxTable =document.querySelector('div');
let fontSize = ['12px', '14px', '16px', '18px', '20px' ];
// let fontSizeClass=['font_size_0','font_size_1','font_size_2','font_size_3','font_size_4'];
let fontFamilyClass = ['choose option', 'cursive', 'fantasi', 'monospase', 'sens-serif'];
let styleFonds = ['Bold text', 'Cursive text'];
let styleBorder = ['solid', 'dashed', 'dotted', 'double'];
let colorBorder =['lime', 'yellow', 'yellowgreen', 'green', 'orange', 'orangered', 'blue', 'blueviolet', 'navy'];
let typeListMarks=['disc', 'circle', 'square'];
let getSel = (sel) => document.querySelector(sel);
let bottomBoxButton = bottomText.nextElementSibling;


// console.log(bottomBoxButton)
// let bottomBoxButton=document.querySelector('.bottom_box_button');
let checkButtonEdit =true;
buttonEdit.addEventListener('click', function(){
    bottomText.classList.remove('disabled');
    bottomText.classList.add('bottom_text');
    bottomBoxButton.classList.remove('disabled');
    bottomBoxButton.classList.add('bottom_box_button');
    if(checkButtonStyle == false){
    bottomBoxStyle.classList.remove('bottom_style', 'bottom_text');
    bottomBoxStyle.classList.add('disabled'); 
    }

    if(checkButtonEdit){
        bottomText.value = topBox.innerHTML;
        checkButtonEdit =false;
    }

});
let buttonSave =getSel('#bt_save')
    buttonSave.addEventListener('click', function(){
        topBox.innerHTML = bottomText.value;
});
let checkButtonAdd=true;
let buttonAdd =getSel('#bt_add')
    buttonAdd.addEventListener('click', function(){
        mainBox.classList.remove('main')
        mainBox.classList.add('disabled')
        document.body.style.backgroundColor = 'rgba(77, 154, 255, 0.123)';
        
        // console.log(boxTable)
        boxTable.classList.remove('disabled');
        boxTable.classList.add('box_table')
// ________________________________
    if(checkButtonAdd){
        boxTableList =document.createElement('form');
        boxTableList.classList.add('box_table_list')
        boxTableListTitle =document.createElement('h2');
        boxTableListTitle.innerText='Do you wont';
        boxTableListContent =document.createElement('div');
        boxTableListContent.classList.add('box_table_list_content')
        boxTableListContent.innerHTML = `<span><input type="radio" name="tl" id="check_table" style="margin-right: 10px"><label for="check_table" style="margin-right: 15px; font-size: 20px;">table</label></span><span style="margin-right: 20px; margin-left: 10px; font-size: 30px">or</span><span><input type="radio" name="tl" id="check_list" style="margin-right: 10px"><label for="check_list" style="margin-right: 10px; font-size: 20px;">list</label></span><br><span style="margin-right: auto; margin-left: 90px; font-size: 30px">?</span>`;
        
        boxTableList.appendChild(boxTableListTitle);
        boxTableList.appendChild(boxTableListContent);

        boxTable.appendChild(boxTableList);
        checkButtonAdd=false;
    

        radioCheckedTable=document.querySelector('#check_table');
        // console.log(radioCheckedTable);

        let swichCheckedTableOrList;
        let table=true;
        let list=true;
        radioCheckedTable.addEventListener('change', function(){
            if(list==false){
                boxListEdit.classList.remove("box_list_edit_content")
                boxListEdit.classList.add('disabled')

            };
            swichCheckedTableOrList=true;
            if(swichCheckedTableOrList){
                if(table){
                // boxListEdit.classList.remove("box_list_edit_content")
                // boxListEdit.classList.add('disabled')
                boxTableEdit =document.createElement('form');
                boxTableEdit.classList.add('box_table_edit_content')
                boxTableEdit.innerHTML = `<span><label for="countTR" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Count TR:</label><input type="number" name="countTR" id="table_TR" style="width: 80%; height: 30px;" placeholder="Count TR"></span><br><span><label for="countTD" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Count TD:</label><input type="number" name="countTD" id="table_TD" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 20px;"placeholder="Count TD"></span><br><span style="margin-top: 30px; margin-left: 30px; font-family: Arial; font-size: 20px">Add style to your table:</span><br><span><label for="widthOfTd" style="margin-right: 15px; font-size: 16px; font-family: Arial;">Width of TD:</label><input type="number" placeholder="Width of TD" name="widthOfTd" id="width_table_td" style="width: 80%; height: 30px; margin-top: 10px;"></span><br><span><label for="heightOfTd" style="margin-right: 10px; font-size: 16px; font-family: Arial;">Height of TD:</label><input type="number" placeholder="Height of TD" name="heightOfTd" id="height_table_td" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 10px;"></span><br><span><label for="widthOfBorder" style="margin-right: 15px; font-size: 12px; font-family: Arial;">Width of border:</label><input type="number" placeholder="Width of border" name="widthOfBorder" id="width_border" style="width: 140px; height: 30px; margin-top: 10px; margin-right: 10px;"></span><span><label for="typeOfBorder" style="margin-right: 10px; font-size: 12px; font-family: Arial;">Type of border:</label><select name="typeOfBorder" id="type_of_border" style="width: 140px; height: 30px; margin-top: 5px; margin-right: 10px;"></select></span><span><label for="ColOfBord" style="margin-right: 10px; font-size: 12px; font-family: Arial;">Color of border:</label><select name="ColOfBord" id="col_of_bord" style="width: 140px; height: 30px; margin-top: 5px; margin-right: 10px;"></select></span><br><button type='button' name='button_table' id="button_table" value="Create table" style="width: 100px; height: 35px; background-color: rgb(80, 78, 78); color: white; margin-top: 20px">Create table</button>`;

                boxTableList.appendChild(boxTableEdit);
            
                typeOfBorder = document.querySelector("#type_of_border");
                // console.log(typeOfBorder);
                for(let i=0; i<4; i++){
                    typeOfBorderOption=document.createElement('option');
                    typeOfBorderOption.setAttribute('name',"selectOption");
                    typeOfBorderOption.setAttribute('value',``+styleBorder[i]+``);
                    typeOfBorderOption.setAttribute('id',`border_style_`+[i]+``);
                    typeOfBorderOption.innerHTML = styleBorder[i];
                    typeOfBorder.appendChild(typeOfBorderOption); 
                }
                colorOfBorder =document.querySelector('#col_of_bord');
                // console.log(colorOfBorder);
                for(let i=0; i<9; i++){
                    colorOfBorderOption=document.createElement('option');
                    colorOfBorderOption.setAttribute('name',"selectOption");
                    colorOfBorderOption.setAttribute('value',``+colorBorder[i]+``);
                    colorOfBorderOption.setAttribute('id',`border_color_`+[i]+``);
                    colorOfBorderOption.innerHTML = colorBorder[i];
                    colorOfBorder.appendChild(colorOfBorderOption); 
                }


                table=false;
                }
                else{
                    boxTableEdit.classList.remove('disabled')
                    boxTableEdit.classList.add('box_table_edit_content')
                        
                    boxListEdit.classList.remove("box_list_edit_content")
                    boxListEdit.classList.add('disabled')
                };
            
            };

            let createTableButton =document.querySelector('#button_table')
            // console.log(createTableButton);
            createTableButton.addEventListener('click',function(){
                boxTable.classList.remove('box_table');
                boxTable.classList.add('disabled');
                mainBox.classList.remove('disabled');
                mainBox.classList.add('main');
                document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                
                let temporaryDiv=document.createElement('div')
                let tbl = document.createElement('table')
                let tbl_body = document.createElement('tbody');
                let inputTR=getSel('#table_TR');
                let inputTD=getSel('#table_TD');
                let inputWidthTD=getSel('#width_table_td');
                let inputHeightTD=getSel('#height_table_td');
                // console.log(inputHeightTD)
                let inputWidthBorder=getSel('#width_border');
                let selectBorderStyle=getSel('#type_of_border');
                let selectBorderColor=getSel('#col_of_bord')
                // tbl.classList.add(selectBorderStyle.value, selectBorderColor.value);
                tbl.style.borderSpacing=0;
                tbl.style.borderCollapse = 'collapse';
                let tbl_row;
                
              for(let i = 0; i < inputTR.value; i++){
                  tbl_row = document.createElement('tr');
          
                    for(let i = 0; i < inputTD.value; i++) {
                          tbl_col = document.createElement('td');
                          tbl_col.innerText = 'TD';
                          tbl_col.style.textAlign  = 'center';
                          tbl_col.style.width = inputWidthTD.value + 'px';
                          tbl_col.style.height = inputHeightTD.value + 'px';
                          tbl_col.style.borderWidth  = inputWidthBorder.value + 'px';
                          tbl_col.style.borderStyle  = selectBorderStyle.value;
                          tbl_col.style.borderColor  = selectBorderColor.value;
                          tbl_row.appendChild(tbl_col);    
                        }
                        tbl_body.appendChild(tbl_row);
                    }
                      tbl.appendChild(tbl_body);
                      temporaryDiv.appendChild(tbl);
                      bottomText.value += temporaryDiv.innerHTML;
        
            });

            


        });
            radioCheckList = document.querySelector('#check_list');
            // console.log(radioCheckList);
            
            radioCheckList.addEventListener('change', function(){
                if(table==false){
                    boxTableEdit.classList.remove('box_table_edit_content')
                    boxTableEdit.classList.add('disabled')
                };

                swichCheckedTableOrList=false;
                if(swichCheckedTableOrList==false){
                    
                    if(list){
                    
                    boxListEdit =document.createElement('form');
                    boxListEdit.classList.add('box_list_edit_content')
                    boxListEdit.innerHTML=`<span><label for="countLi" style="margin-right: 70px; font-size: 16px; font-family: Arial;">Count Li:</label><input type="number" name="countLi" id="li" style="width: 80%; height: 30px;" placeholder="Count Li"></span><br><span><label for="type_of_marks" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Type of marks:</label><select  name="type_of_marks" id="type_marks" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 20px;"></select></span><br><button type='button' name='button_list' id="button_list" value="Create list" style="width: 100px; height: 35px; background-color: rgb(80, 78, 78); color: white; margin-top: 20px">Create list</button>`;

                boxTableList.appendChild(boxListEdit);    

                let typeOfMarks = document.querySelector("#type_marks");
                // console.log(typeOfMarks);
                for(let i=0; i<3; i++){
                    typeOfMarksOption=document.createElement('option');
                    typeOfMarksOption.setAttribute('name',"selectOptionListMark");
                    typeOfMarksOption.setAttribute('value',``+typeListMarks[i]+``);
                    typeOfMarksOption.setAttribute('id',`list_mark_style_`+[i]+``);
                    typeOfMarksOption.innerHTML = typeListMarks[i];
                    typeOfMarks.appendChild(typeOfMarksOption); 
                }
                


                    
                    list=false;

                    }
                    else{
                        boxTableEdit.classList.remove('box_table_edit_content')
                        boxTableEdit.classList.add('disabled')
                        
                        boxListEdit.classList.remove("disabled")
                        boxListEdit.classList.add('box_list_edit_content')
                    }

                };

                let createListButton =document.querySelector('#button_list')
                // console.log(createListButton);
                createListButton.addEventListener('click',function(){
                    boxTable.classList.remove('box_table');
                    boxTable.classList.add('disabled');
                    mainBox.classList.remove('disabled');
                    mainBox.classList.add('main');
                    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    
                    let temporaryDivList=document.createElement('div')
                    let list = document.createElement('ul')
                    let inputListCount=getSel('#li')
                    let typeOfMarks=getSel('#type_marks')
                    for(let i = 0; i < inputListCount.value; i++){
                        let li = document.createElement('li');
                        li.innerText=`item`+[i]+``;
                        li.style.listStyle = typeOfMarks.value;
                        list.appendChild(li);
                    }
                    temporaryDivList.appendChild(list);

                    bottomText.value += temporaryDivList.innerHTML;
            
                });







            });
        }
    });



let checkButtonStyle = true;
buttonStyle.addEventListener('click', function(){


if(checkButtonStyle){
    bottomBoxStyle.classList.remove('disabled');
    bottomBoxStyle.classList.add('bottom_style', 'bottom_text');
    bottomText.classList.remove('bottom_text');
    bottomText.classList.add('disabled');
    bottomBoxButton.classList.remove('bottom_box_button');
    bottomBoxButton.classList.add('disabled');

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

    let bottomBoxStyleColorBoxChoiseBox =document.createElement('div');
    bottomBoxStyleColorBoxChoiseBox.setAttribute('class', 'disabled')
    for(let i=0; i<9; i++){
        bottomBoxStyleColorBoxChoiseBoxColor =document.createElement('div');
        bottomBoxStyleColorBoxChoiseBoxColor.setAttribute('class', 'bottom_box_style_color_box_choise_box_color');
        bottomBoxStyleColorBoxChoiseBoxColor.classList.add(`background_color_`+[i]+``, `text_color_`+[i]+``)
        bottomBoxStyleColorBoxChoiseBox.appendChild(bottomBoxStyleColorBoxChoiseBoxColor);
    }

    bottomBoxStyle.appendChild(bottomBoxStyleColorBoxChoiseBox);

    


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
                // console.log(key)
                
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
            const fontFamilyClass = ['font_family_0','font_family_1','font_family_2','font_family_3','font_family_4'].indexOf(key)!==-1;
            if(fontFamilyClass){
                topBox.classList.remove(key)
                // console.log(key)
            }
            });
          topBox.classList.add(this.value);

    });

// _______________________________________________ColorButton
    
    let toggleColorTextColorBackground;
    bottomBoxStyleColorBoxButtonBtnColorText =document.querySelector('.bottom_box_style_color_box_button-btncolortext');
    // console.log( bottomBoxStyleColorBoxButtonBtnColorText);
    bottomBoxStyleColorBoxButtonBtnColorText.addEventListener('click',function(){
        toggleColorTextColorBackground=true;
        if(toggleColorTextColorBackground===true){
        bottomBoxStyleColorBoxChoiseBox.setAttribute('class', 'bottom_box_style_color_box_choise_box');
        for(let i=0; i<9; i++){
        bottomBoxStyleColorBoxChoiseBoxColor=document.querySelector(`.text_color_`+[i]+``)
        // console.log(bottomBoxStyleColorBoxChoiseBoxColor)
            bottomBoxStyleColorBoxChoiseBoxColor.addEventListener('mousedown', function(){
                if(toggleColorTextColorBackground===true){
                    let arrTopBoxClassList =topBox.className.split(' ')
                    arrTopBoxClassList.forEach(key =>{
                    const textColorClass = ['text_color_0','text_color_1','text_color_2','text_color_3','text_color_4', 'text_color_5', 'text_color_6', 'text_color_7', 'text_color_8'].indexOf(key)!==-1;
                if(textColorClass){
                    topBox.classList.remove(key)
                    // console.log(key)
                    }
                });

               
            }

 
        });
        bottomBoxStyleColorBoxChoiseBoxColor.addEventListener('mouseup', function(){
            if(toggleColorTextColorBackground===true){   
                topBox.classList.add('text_color_'+[i]);
            }  
            bottomBoxStyleColorBoxChoiseBox.classList.remove('bottom_box_style_color_box_choise_box');
            bottomBoxStyleColorBoxChoiseBox.classList.add('disabled')

        });
    
    }
    
    }
    
    
});

    bottomBoxStyleColorBoxButtonBtnColorBackground =document.querySelector('.bottom_box_style_color_box_button-btncolorbackground')
    // console.log(bottomBoxStyleColorBoxButtonBtnColorBackground);
    bottomBoxStyleColorBoxButtonBtnColorBackground.addEventListener('click', function(){
        toggleColorTextColorBackground=false;
        if(toggleColorTextColorBackground===false){
            bottomBoxStyleColorBoxChoiseBox.setAttribute('class', 'bottom_box_style_color_box_choise_box');
            for(let i=0; i<9; i++){
            bottomBoxStyleColorBoxChoiseBoxColor=document.querySelector(`.text_color_`+[i]+``)
            // console.log(bottomBoxStyleColorBoxChoiseBoxColor)
        bottomBoxStyleColorBoxChoiseBoxColor.addEventListener('mousedown', function(){
            if(toggleColorTextColorBackground===false){
                let arrTopBoxClassList =topBox.className.split(' ')
                arrTopBoxClassList.forEach(key =>{
                const backgroundColorClass = ['background_color_0','background_color_1','background_color_2','background_color_3','background_color_4', 'background_color_5', 'background_color_6', 'background_color_7', 'background_color_8'].indexOf(key)!==-1;
                if(backgroundColorClass){
                    topBox.classList.remove(key)
                    // console.log(key)
                    }
                });

                
                

            }

            
            });
            bottomBoxStyleColorBoxChoiseBoxColor.addEventListener('mouseup', function(){
                if(toggleColorTextColorBackground===false){
                    topBox.classList.add('background_color_'+[i]);
                };
                bottomBoxStyleColorBoxChoiseBox.classList.remove('bottom_box_style_color_box_choise_box');
                bottomBoxStyleColorBoxChoiseBox.classList.add('disabled')


            });
        
        }
        
        }
        
    });
// ____________________________________checkbox_bold_italic

    bottomBoxStyleFontStyleBoxCheckBoxBold =document.querySelector('#checkStyle0');
    // console.log(bottomBoxStyleFontStyleBoxCheckBoxBold);

    bottomBoxStyleFontStyleBoxCheckBoxBold.addEventListener('change',function(){
        if(bottomBoxStyleFontStyleBoxCheckBoxBold.checked)topBox.classList.add('bold');
        else topBox.classList.remove('bold')
    });

    bottomBoxStyleFontStyleBoxCheckBoxItalic =document.querySelector('#checkStyle1');
    // console.log(bottomBoxStyleFontStyleBoxCheckBoxItalic);

    bottomBoxStyleFontStyleBoxCheckBoxItalic.addEventListener('change',function(){
        if(bottomBoxStyleFontStyleBoxCheckBoxItalic.checked)topBox.classList.add('italic');
        else topBox.classList.remove('italic')
    });

    checkButtonStyle = false;
    }
    else{
        bottomBoxStyle.classList.remove('disabled');
        bottomBoxStyle.classList.add('bottom_style', 'bottom_text');
        bottomText.classList.remove('bottom_text');
        bottomText.classList.add('disabled');
        bottomBoxButton.classList.remove('bottom_box_button');
        bottomBoxButton.classList.add('disabled');

    }








});

let hi = ("Wellcome,");
let name = prompt("Ввведіть Ваше ім'я");
let width = prompt("Введіть ширину");
let height = prompt("Введіть висоту");
let bgcol = prompt("Введіть колір");
let bordwidth = prompt("Введіть ширину рамки");
let bordtype = prompt("Введіть тип рамки");
let bordcolor = prompt("Введіть колір рамки");


document.write(`<div style = 'margin: 0 auto; height: ${height}px; width: ${width}px; background: ${bgcol}; border:${bordwidth}px ${bordtype} ${bordcolor}; display: flex; justify-content: center; align-items: center; flex-direction:column;'><div style = 'height: 40px; width: 40px; background-image: url(github.png); background-size: cover;'></div><h2>${hi }${name}</h2></div>`)



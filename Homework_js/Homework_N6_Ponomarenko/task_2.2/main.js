let znamen = +prompt('Введіть знаменник');
let kilkist = +prompt('Введіть кількість елементів');

let func = function(n, q){
    let b = 1;

    let s = b * (1 - n ** q) / (1 - n);
    return s;
}

let x=func(znamen, kilkist);
console.log(x);
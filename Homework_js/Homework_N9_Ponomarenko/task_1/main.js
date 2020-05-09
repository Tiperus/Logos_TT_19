let name = prompt('Введіть текст')
let result=0;

for(let i = 0; i<name.length; i++){
    if (name.charAt(i)==" ") result++;
    else continue
}
console.log(result)
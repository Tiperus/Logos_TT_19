

const arr=["html","css","js","html","js","python","js","scss"];
let newArr=[]
for(let i=0; i<arr.length; i++){
    for(let b=0; b<arr.length; b++){
    if (arr[i]===arr[b] && i!=b)arr.splice(b,1);
    else newArr[i]=arr[i];
    }
    
}
console.log(arr);
console.log(newArr)


// Other possibility

// const arr=["html", "css", "js", "html", "js", "python", "js", "scss"];

// const newArr = [ ... new Set ( arr ) ] ;


// console.log(newArr);

// _____________________


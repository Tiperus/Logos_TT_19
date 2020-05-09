const arr1=[1,2,3,];
const arr2=[1,2,3,[10,20,30]];
function copy(x,y){
let copyArr1 = x.splice(0,(x.length));
let copyArr2 = y.splice(0,(y.length));
console.log(copyArr1);
console.log(copyArr2);
}
copy(arr1,arr2)


// other possibility


// const arr1=[1,2,3,4];
// const arr2=[1,2,3,[10,20,30]];

// function copy(x,y) {
//     let copyArr1=[];
//     let copyArr2=[];
//     for(let i=0; i<x.length; i++){
//         copyArr1[i]=x[i];
//         copyArr2[i]=y[i];
//     }
//     console.log(copyArr1);
//     console.log(copyArr2);
// };
// copy(arr1,arr2);

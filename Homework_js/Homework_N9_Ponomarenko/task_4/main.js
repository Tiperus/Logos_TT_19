let x=prompt("Введіть посилання на сайт");
x=x.toLowerCase();

if(x.charAt(4)=="s") x=x.substring(8);
else x=x.substring(7);

console.log(x);


// let str1 = 'JavaScript'
// console.log('str1.substring(2)',str1.substring(2))
// console.log('str1.substring(2,4)',str1.substring(2,4))
// console.log('str1.substring(2,-4)',str1.substring(2,-4))
// console.log('str1.substring(-2,4)',str1.substring(-2,4))
// console.log('str1.substring(4,2)',str1.substring(4,2))


// let str2 = 'JavaScript'

// console.log('str2.substr(2)',str2.substr(2))
// console.log('str2.substr(2,3)',str2.substr(2,3))
// console.log('str2.substr(4,-2)',str2.substr(4,-2))
// console.log('str2.substr(-4,2)',str2.substr(-4,2))
// console.log('str2.substr(-4,-2)',str2.substr(-4,-2))

// let str3 = 'JavaScript'

// console.log('str3.slice(2)',str3.slice(2))
// console.log('str3.slice(2,4)',str3.slice(2,4))
// console.log('str3.slice(2,-3)',str3.slice(2,-3))
// console.log('str3.slice(-4, 10)',str3.slice(-4, 8))
// console.log('str3.slice(-4,-2)',str3.slice(-4,-2))

// let str4 = 'JavaScript HTML CSS'
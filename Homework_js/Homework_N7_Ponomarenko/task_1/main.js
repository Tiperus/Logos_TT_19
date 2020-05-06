let person = {};
person.firstName = "Ivan";
person.secondName = "Ivaniv";
person.showData = function(){return(`This person name: ${this.firstName}, This person secondname: ${this.secondName}`)};



let newperson = Object.assign({},person);
newperson.firstName = "Petro";
newperson.secondName = "Petriv";


// console.log(person);
// console.log(newperson);
console.log(person.showData())

console.log(newperson.showData())



// }
// this.showData = function(){
//     //         return `This student name: ${this.name}, age: ${this.age}`
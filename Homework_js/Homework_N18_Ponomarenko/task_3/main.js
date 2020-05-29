let arr =[5,6,7,8,9];

const users = [{name: 'Ivan', country: 'Ukraine'},
               {name: 'Petro', country: 'Ukraine'},
               {name: 'Miguel',country: 'Cube'}
              ];
let result = users.every(user => user.country == 'Ukraine');
              console.log(result)


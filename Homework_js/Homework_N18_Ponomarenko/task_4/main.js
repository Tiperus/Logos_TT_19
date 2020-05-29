let arr =[5,6,7,8,9];

const users = [{name: 'Ivan', country: 'Ukraine'},
               {name: 'Petro', country: 'Ukraine'},
               {name: 'Miguel',country: 'Cuba'}
              ];
let result = users.some(user => user.country == 'Cuba');
              console.log(result)


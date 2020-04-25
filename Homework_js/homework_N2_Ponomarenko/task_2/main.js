let login = prompt('Enter your login')
let name = "admin";
let password = "Logos";
let singpassword;

        
if (login == null) {
        alert('Вхід скасовано!')
        }
    else if (name == login) {
        singpassword = prompt("Write your password")
        }

        if (singpassword == null) {
            alert('Ви ввели неправильні дані!');
        }
            else if  (singpassword == password) {
                alert("Ласкаво просимо!");
            }
            
else {
            alert('Я Вас не знаю')
        }
        


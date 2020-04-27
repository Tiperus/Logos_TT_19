let login = prompt('Enter your login')
let name = "admin";
let password = "Logos";
let singpassword;

        
if (login == null) {
        alert('Вхід скасовано!')
}
    else if (name == login) {
        singpassword = prompt("Write your password")
        

        if (singpassword == null) {
            alert('Вхід скасовано!');
        }
            else if  (singpassword == password) {
                alert("Ласкаво просимо!");
            }
            else {alert("Ви ввели неправильний пароль!");}
    }           
else {
            alert('Я Вас не знаю')
        }
        


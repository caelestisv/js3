let sayHi = function(name, age){
    if(age<18)
        console.log(`${name}, вы еще очень молоды`);
    if(age>=18 && age<=50)
        console.log(`${name}, добро пожаловать в личный кабинет!`);
    if(age>50)
        console.log(`${name}, моё почтение`);
    if(isNaN(age))
        console.log("Укажите корректные данные!");
}    
document.querySelector("#btn").onclick=function(){
    let Name = prompt("Введите имя");
    let Age = +prompt("Введите возраст");
    console.log(Name,Age);
    sayHi(Name,Age);
}
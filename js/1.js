function deff_s(str){
    if(str == "М"||str == "м") 
        alert("Ваш пол мужской");
    else if(str == "Ж"||str == "ж") 
        alert("Ваш пол женский");
    else 
        alert("Ваш пол неопределен");
}
let pol = prompt("Введите сокращение пола");
deff_s(pol);
function deffDay(n){
    switch(n){
        case 1: 
            alert("Понедельник");
            break;
        case 2: 
            alert("Вторник");
            break;
        case 3: 
            alert("Среда");
            break;
        case 4: 
            alert("Четверг");
            break;
        case 5: 
            alert("Пятница");
            break;
        case 6: 
            alert("Суббота");
            break;
        case 7: 
            alert("Воскресенье"); 
            break;
    }
}
let n;
while(true){
    n = +prompt("Введите номер дня недели");
    if(isNaN(n) || n>7 || n<=0)
        alert("Неверный ввод");
    else
        break;
}
deffDay(n);
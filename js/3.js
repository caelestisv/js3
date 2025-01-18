function find_min(a,b,c){
    let min = 10000000;
    if(min>a) min = a;
    if(min>b) min = b;
    if(min>c) min = c;
    return min;
}
function find_max(a,b,c){
    let max = -10000000;
    if(max<a) max = a;
    if(max<b) max = b;
    if(max<c) max = c;
    return max;
}
let a = +prompt("Введите число");
let b = +prompt("Введите число");
let c = +prompt("Введите число");
if(isNaN(a) || isNaN(b) || isNaN(c)) 
    alert("Неверный ввод")
else 
    alert(`Максимум равен ${find_max(a,b,c)}. Минимум равен ${find_min(a,b,c)}`)



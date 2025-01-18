let n = () => Math.round(Math.random()*1000);

let a = n();
let b = n();

let rez = +prompt(`Вычислите ${a} + ${b}`);
if (rez == a+b) alert("Верно!");
else alert("Неверно");
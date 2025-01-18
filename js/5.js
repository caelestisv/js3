let defType = function(elem){
    console.log(`${elem} тип данных:  ${typeof elem}`);
}    
document.querySelector("#btn").onclick=function(){
    defType("dksfldl");
    defType(true);
    defType();
    defType(1234);
}
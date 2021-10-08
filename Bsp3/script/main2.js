"use strict";

// hier kommen ihre Skripte hin



let nummer1 =prompt("Wählen ein nummer");
let nummer2 =prompt("Wählen der zweite nummer");
let operation=prompt("Wählen eine arichtmetische Operation (+-*/)");
let a=Number(nummer1);
let b=Number(nummer2);


const calcolatore = {
    result: 2,
    memory:function() { return this.result;}
}

function sum(a,b){
    //calcolatore.result=a+b;
    calcolatore.result=a+b;
    return console.log(a+b);
}
function sub(a,b){
    calcolatore.result=a-b;
    return console.log(a-b);
}
function div(a,b){
    calcolatore.result=a/b;
    return console.log(a/b);
}
function mul(a,b){
    calcolatore.result=a*b;
    return console.log(a*b);
}


function calc(a,b,operation){
    if(operation=="+")
      return sum(a,b);
    else if   (operation=="-")
      return sub(a,b);
    else if (operation=="/")
      return div(a,b);
    else (operation=="*")
       return mul(a,b);
}

calc(a,b,operation);


console.log("Adesso sto qui "+calcolatore.result);
console.log("Adesso sto qui2  "+calcolatore.memory());


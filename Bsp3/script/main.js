"use strict";

// hier kommen ihre Skripte hin





//leggo label
let i=1;
console.log(document.getElementById("todoFeld").Value)
document.getElementById("create").addEventListener("click", function(){
    let todoInput = document.getElementById("todoFeld").value;

    const li = document.createElement("li");
    li.innerHTML=todoInput;
    
    const bu = document.createElement("button"); 
    bu.innerHTML="Delete";
    bu.className=i;
    bu.id="deleteTodoElement";
    console.log("Hallo");
    li.appendChild(bu);

    document.querySelector("#cards ul").appendChild(li);
    i++;
});

document.querySelector("#cards ul").addEventListener("click", calcelElementOfList);


function calcelElementOfList(e){
    console.log("cancella elemento");
//	let c = e.target.innerText;
    let idElement = e.target.id;
    console.log(idElement +  "  element e il valore della i e` : "+i+" la classe é: "+ e.target.className);
    let list = document.querySelectorAll("#cards ul li");

    e.target.remove();
}
//prova
//let result = responseMessage2.filter(item => item.Color==farbe);





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
    li.appendChild(bu);


    const bu2 = document.createElement("button"); 
    bu2.innerHTML="Over";
    bu2.className=i;
    bu2.id="OverTodoElement";
    li.appendChild(bu2);

    const bu3 = document.createElement("button"); 
    bu3.innerHTML="Down";
    bu3.className=i;
    bu3.id="DownTodoElement";
    li.appendChild(bu3);

    document.querySelector("#cards ul").appendChild(li);
    i++;


    window.onload;
});

document.querySelector("#cards ul").addEventListener("click", calcelElementOfList);


function calcelElementOfList(e){
    if(e.target.innerHTML=="Delete")  {
        console.log("delete element");
        let idElement = e.target.id;
        console.log(idElement +  "  element e il valore della i e` : "+i+" la classe é: "+ e.target.className);
        let listHtml = document.querySelectorAll("#cards ul li");
        let list=Array.from(listHtml);
        let elementToRemove = list[Number(e.target.className)-1];
        document.querySelector("#cards ul").removeChild(elementToRemove); 
    }  
    else if(e.target.innerHTML=="Over")  {
        console.log("move over ");
        let idElement = e.target.id;
        console.log(idElement +  "  element e il valore della i e` : "+i+" la classe é: "+ e.target.className);
        let listHtml = document.querySelectorAll("#cards ul li");
        let list=Array.from(listHtml);
        list=[1,2,3,4,5,6,7,8,9,0];

        console.log("Array prima : "+list);
      
    }
    window.onload;
}


/*
function moveUp(){
    for (var i = 0; i < upLink.length; i++) {
        upLink[i].addEventListener('click', function () {
            var wrapper = this.parentElement;

            if (wrapper.previousElementSibling)
                wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
        });
    }
}

function moveUp(){
	for (var i = 0; i < downLink.length; i++) {
		downLink[i].addEventListener('click', function () {
			var wrapper = this.parentElement;

			if (wrapper.nextElementSibling)
			    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
		});
	}

}
*/

function moveUp(element) {
    console.log("moveUP");
    if(element.previousElementSibling)
      element.parentNode.insertBefore(element, element.previousElementSibling);
  }
  function moveDown(element) {
    console.log("moveDOWN");
    if(element.nextElementSibling)
      element.parentNode.insertBefore(element.nextElementSibling, element);
  }
  //document.querySelector('ul').addEventListener('click', function(e) {
    document.querySelectorAll("#OverTodoElement").addEventListener('click', function(e) {
    if(e.target.id === 'DownTodoElement') moveDown(e.target.parentNode);
    else if(e.target.id === 'OverTodoElement') moveUp(e.target.parentNode);
  });


/*
 function move () {
	var upLink = document.querySelectorAll("#OverTodoElement");

	for (var i = 0; i < upLink.length; i++) {
		upLink[i].addEventListener('click', function () {
            console.log("LLLLLLL Over");
			var wrapper = this.parentElement;

			if (wrapper.previousElementSibling)
			    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
		});
	}

	var downLink = document.querySelectorAll("#DownTodoElement");

	for (var i = 0; i < downLink.length; i++) {
		downLink[i].addEventListener('click', function () {
            console.log("LLLLLLL  Down");
			var wrapper = this.parentElement;

			if (wrapper.nextElementSibling)
			    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
		});
	}
}
*/
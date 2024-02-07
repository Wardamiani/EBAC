// elemento no corpo do html
const parag = document.createElement("p");
parag.innerText = "Hello World";
document.body.appendChild(parag);


// elemento em uma div
const parag2 = document.createElement("p");
parag2.innerHTML = "Hello World";
document.getElementById("bloco1").appendChild(parag2);


// elemento em um botão
const btn = document.createElement("button");
btn.innerHTML = "Hello World";
btn.style.width = '200px';
document.body.appendChild(btn);


// elemento a partir de evento com mouse
const evento = document.createEvent("MouseEvent");
evento.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementById("bloco2").dispatchEvent(evento);


// elemento a partir de createTextNode() em div
let textNode = document.createTextNode("Hello World"); 
document.getElementById("bloco3").appendChild(textNode);


// elemento a partir de Input Hidden Object
function myFunction() {
    var btn2 = document.createElement("INPUT");
    btn2.setAttribute("type", "hidden");
    document.body.appendChild(btn2);  
    document.getElementById("bloco4").innerHTML = "Hello World";
  }


  // elemento a partir de getElementById
  var paragraph = document.getElementById("bloco5");
  var text = document.createTextNode("Hello World");  
  paragraph.appendChild(text);

  
// elemento a partir de insertAdjacentText
  function InsertText() {
    const h2 = document.getElementById("bloco6");
    let text = "Hello World ";
    h2.insertAdjacentText("beforeend", text);
}


// elemento a partir de scroll
myID = document.getElementById("bloco7");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 60) {
    myID.className = "cta show"
  } else {
    myID.className = "cta hide"
  }
};

const parag7 = document.createElement("p");
parag7.innerHTML = "Hello World";
document.getElementById("bloco7").appendChild(parag7);

window.addEventListener("scroll", myScrollFunc);



// elemento a partir de Object.Assign()
document.body
  .appendChild(
  Object.assign(
    document.createElement('p'),
    { id:'bloco8'}
  )
).appendChild(
  Object.assign(
    document.createElement('p'),
    { innerHTML : 'Hello World' ,
    }
  )
)

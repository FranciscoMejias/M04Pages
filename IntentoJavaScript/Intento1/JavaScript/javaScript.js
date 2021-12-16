var f1Text = document.querySelector("#ChColorF1Text");
var f1Button = document.querySelector("#ChColorF1Button");
var reload = document.querySelectorAll(".reloadw");

f1Button.addEventListener("click",chColor);

function chColor() {

    f1Text.style.color = "red";

}

reload[1].addEventListener("click",reloader);

function reloader(){

    location.reload(reload);

}


function create() {
    // createElement
    var elementNode = document.createElement('h1');
    // createTextNode
    var textNode = document.createTextNode('Saludos');

    elementNode.appendChild(textNode);
    document.body.appendChild(elementNode);
}


function remover() {

    f1Text.parentNode.removeChild(f1Text);

}
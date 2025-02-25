let menuDisplay = false

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("line-button")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", menu)
    }
});

function menu(){
    let menu = document.getElementById("menu")
    let wrap = document.getElementById("wrap")
    if(menuDisplay){
        menu.style.display = "none"
        wrap.style.display = "none"
        menuDisplay = false
    }
    else{
        menu.style.display = "block"
        wrap.style.display = "block"
        menuDisplay = true
    }
}
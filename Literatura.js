let menuDisplay = false

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("line-button")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", menu)
    }

    let reviews = document.getElementsByClassName("review")
    for(let i = 0; i < reviews.length; i++){
        reviews[i].addEventListener("mouseover", hover(i))
        reviews[i].addEventListener("click", review)
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

function hover(element){
    element.style.border = "solid white 2px"
    element.children[0].style.height = "496px"
    element.children[0].style.borderRadius = "26px"
}

function notHover(element){
    element.style.border = "none"
    element.children[0].style.height = "500px"
    element.children[0].style.borderRadius = "30px"

}

function review(){

}
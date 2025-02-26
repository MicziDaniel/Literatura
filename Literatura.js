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
    console.log(element.children[0].offsetHeight)
    element.style.border = "solid white 2px"
    element.children[0].style.height = String(element.children[0].offsetHeight - 4) + "px"
    element.children[0].style.borderRadius = "26px"
}

function notHover(element){
    element.style.removeProperty('border');
    element.children[0].style.removeProperty('height')
    element.children[0].style.removeProperty('borderRadius')
}

function review(){

}

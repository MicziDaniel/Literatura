let menuDisplay = false

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("line-button")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", menu)
    }

    let reviews = document.getElementsByClassName("review")
    for(let i = 0; i < reviews.length; i++){
        reviews[i].addEventListener("click", function(){review(reviews[i])})
    }

    let home = document.getElementById("home")
    home.addEventListener("click", returnHome)
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
    element.children[0].style.height = String(element.offsetHeight - 4) + "px"
    element.children[0].style.borderRadius = "28px"
}

function notHover(element){
    element.style.removeProperty('border');
    element.children[0].style.removeProperty('height')
    element.children[0].style.removeProperty('borderRadius')
}

function review(element){
    document.getElementById("body").style.display = "none"
    document.getElementById(element.children[2].innerText).style.display = "grid"

    document.getElementById("home").classList.replace("text-secondary", "text-white")
}

function returnHome(){
    document.getElementById("body").style.removeProperty("display")

    reviewPage = document.getElementsByClassName("review-page")
    for(let i = 0; i < reviewPage.length; i++){
        reviewPage[i].style.removeProperty("display")
    }

    document.getElementById("home").classList.replace("text-white", "text-secondary")
}
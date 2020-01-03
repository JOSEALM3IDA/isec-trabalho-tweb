function defineEvents() {
    let clickables = document.getElementsByClassName("clickable")

    for(i = 0; i < clickables.length; i++){
        clickables[i].addEventListener("mouseover", mouseOvering);
        clickables[i].addEventListener("mouseout", mouseOuting);
    }
}

function mouseOvering() {
    console.log("brah");
    this.style.borderColor = "#007c46";
}

function mouseOuting() {
    console.log("nigga");
    this.style.borderColor = "#00000000";
}

defineEvents();
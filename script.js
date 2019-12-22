defineEvents(); //define events

function defineEvents(){
    let arrow = document.getElementById("mobile-arrow")

    arrow.addEventListener("click", dropMenu)
}

function dropMenu(){
    if (this.style.transform == "scaleY(-1)"){
        this.style.transform = "scaleY(1)";

        document.getElementById("navbar-inside").style.display = "none";
    }
    else {
        this.style.transform = "scaleY(-1)";

        document.getElementById("navbar-inside").style.display = "inline";
    }
}
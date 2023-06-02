var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.querySelector("#dark-btn");
var background = document.querySelector("body"); 

function toggleMenu() {
    settingsMenu.classList.toggle("settings-menu-height");
}

function btnToggle() {
    darkBtn.classList.toggle("dark-btn-on");
    background.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark"); 
    }
    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    background.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    background.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}



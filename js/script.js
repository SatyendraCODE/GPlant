// let darkBtn;

let navbar = document.getElementById("navbar");
let bodyColor = document.getElementById('body');
let infoCard = document.getElementById('infoBoxCard');
let partsOfPlants = document.getElementById('partsOfPlants');
let footerDark = document.getElementById('footerDark');
let btnDarkText = document.getElementById("btnDarkText");
let navInputSrc = document.getElementById("navInputSrc");
let infoDarkCard = document.getElementsByClassName("infocard");
let infoTextP = document.getElementsByClassName("infoTextP");
let dropdownMenu = document.getElementsByClassName("dropdown-menu");
let dropItemA = document.querySelectorAll("a.dropdown-item:hover");

let styles = `
    .dropdown-menu{
        background-color: black;
        outline: 2px solid rgba(0, 128, 0, 0.1);
    }
    .dropdown-item:hover{
        background-color : #121212; 
    }
    .btn:hover{
        color: black !important;
        background: green;
    }
    `
let sc = document.createElement('style');
sc.innerText= styles;



function darkTogglerFunc() {
    if (!document.cookie.darkBtn) {
        bodyColor.style = 'background: #121212';
        navbar.style = "background: black !important";
        document.head.appendChild(sc);

        if(infoCard)infoCardFuncIf();
        if(infoTextP[5])quoteIf();
        if(partsOfPlants)partsOfPlantsFunIf();        
        if(infoTextP[8])profileFunIf();
        

        footerDark.style = "background: black !important";   

        navInputSrc.style = 'background: black; border:1px solid green !important;color:white !important;';
        btnDarkText.style.color = 'black';
        document.cookie.darkBtn = "true";
    }
    else {
        bodyColor.style = 'background: white';
        navbar.style = "background:rgb(248,249,250) !important;";
        document.head.removeChild(sc);

        if(infoCard)infoCardFuncElse();
        if(infoTextP[5])quoteElse();
        if(partsOfPlants)partsOfPlantsFunElse();        
        if(infoTextP[8])profileFunElse();

        footerDark.style = "background: rgb(248,249,250) !important";
        
        navInputSrc.style = 'background: white; border:1px solid #dee2e6;';
        btnDarkText.style.color = 'white';
        document.cookie.darkBtn = "false";
    }
}

function infoCardFuncIf(){
    infoCard.style = "background: black !important";
        infoDarkCard[0].style = "background: #121212 !important";
        infoDarkCard[1].style = "background: #121212 !important";
        infoDarkCard[2].style = "background: #121212 !important";
        infoDarkCard[3].style = "background: #121212 !important";
        infoDarkCard[4].style = "background: #121212 !important";

        infoTextP[0].style = 'color: white !important';
        infoTextP[1].style = 'color: white !important';
        infoTextP[2].style = 'color: white !important';
        infoTextP[3].style = 'color: white !important';
        infoTextP[4].style = 'color: white !important';
}
function infoCardFuncElse(){
    infoCard.style = "background:rgb(248,249,250) !important;";
    infoDarkCard[0].style = "background: white !important";
    infoDarkCard[1].style = "background: white !important";
    infoDarkCard[2].style = "background: white !important";
    infoDarkCard[3].style = "background: white !important";
    infoDarkCard[4].style = "background: white !important";

    infoTextP[0].style = 'color: black !important';
    infoTextP[1].style = 'color: black !important';
    infoTextP[2].style = 'color: black !important';
    infoTextP[3].style = 'color: black !important';
    infoTextP[4].style = 'color: black !important';
}
function quoteIf(){
    infoTextP[5].style = 'color: white !important';
}
function quoteElse(){
    infoTextP[5].style = 'color: black !important';
}
function partsOfPlantsFunIf(){
    partsOfPlants.style = "background: black !important";
        infoTextP[6].style = 'color: white !important';
        infoTextP[7].style = 'color: white !important';
}
function partsOfPlantsFunElse(){
    partsOfPlants.style = "background: rgb(248,249,250) !important";
        infoTextP[6].style = 'color: black !important';
        infoTextP[7].style = 'color: black !important';
}
function profileFunIf(){
    infoTextP[8].style = 'color: white !important';
}
function profileFunElse(){
    infoTextP[8].style = 'color: black !important';
}
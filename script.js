// Header scroll effect

window.addEventListener("scroll", function(){

    const header = document.getElementById("main-header");


    if(window.scrollY > 50){

        header.style.background = "#010611";

    }

    else{

        header.style.background = "#020b1ccc";

    }

});
/* =========================
   STICKY HEADER
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

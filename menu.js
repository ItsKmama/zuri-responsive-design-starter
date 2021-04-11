"use strict"
const navLinks = document.querySelector('.nav-links');
const iconElement = document.querySelector('.icon');

function toggleMenu() {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
      
 }
iconElement.addEventListener("click", toggleMenu);


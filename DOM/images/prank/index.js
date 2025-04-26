"use strict";

// these are the buttons for the page
let goodbye = document.querySelector("#goodby");
let neverMind = document.querySelector("#nvm");
let pullMyDigit = document.querySelector("#pullMyDigit");
//
//
//
//
//
// this is the h1 tag and the container h1 tag
let title = document.querySelector("h1").textContent;
let topCont = document.querySelector(".topContainer");
//
//
//
//
//
//these add text content
goodbye.addEventListener("click", goodbyeText);
function goodbyeText() {
    document.querySelector("h1").innerHTML = "good bye";
}

neverMind.addEventListener("click", helloText);
function helloText() {
    document.querySelector("h1").innerHTML = title;
}
//
//
//
//
//
// this function is to add an image into the DOM and remove h1 one
let hasBeenClicked = false;

function clearHeading() {
    document.querySelector("h1").innerHTML = null;
}
//
//
function createGasImage() {
    let image = document.createElement("img");

    image.src = "../fartingundies-1501850018.avif";

    topCont.appendChild(image);

    clearHeading();
}
//
//
pullMyDigit.addEventListener("click", () => {
    if (!hasBeenClicked) {
        hasBeenClicked = true;
        createGasImage();
    }

    goodbye.removeEventListener("click", goodbyeText);

    neverMind.removeEventListener("click", helloText);
});

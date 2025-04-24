// these are the buttons for the page
let buttonGB = document.querySelector("#goodby");
let nvM = document.querySelector("#nvm");
let pullMyDigit = document.querySelector("#pullMyDigit");

// these
let title = document.querySelector("h1").textContent;
let body = document.querySelector("body");

buttonGB.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "good bye";
});

nvM.addEventListener("click", () => {
    document.querySelector("h1").innerHTML = title;
});

pullMyDigit.addEventListener("click", () => {
    let gasImg = document.createElement("img");
    gasImg.src = "images/fartingundies-1501850018.avif";
    body.appendChild(gasImg);
    function del() {
        let deletE = (document.querySelector("h1").innerHTML = " ");
        return deletE;
    }
    del();
});

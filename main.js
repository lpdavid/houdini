// NAVBAR TOGGLE BUTTON
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// ABOUT
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

let callP1 = setTimeout(function () {
    p1.classList.remove("hidden");
}, 2000);

let callP2 = setTimeout(function () {
    p2.classList.remove("hidden");
}, 4000);

let callP3 = setTimeout(function () {
    p3.classList.remove("hidden");
}, 6000);

let callP4 = setTimeout(function () {
    p4.classList.remove("hidden");
}, 8000);

let callP5 = setTimeout(function () {
    p5.classList.remove("hidden");
}, 10000);

// MAGIC TRICK
// MAGIC TRICK ELEMENTS DEFINITION
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let result = document.querySelector(".result_number");

// MAGIC TRICK INITIAL POSITION
card2.style.color = "transparent";
card2.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

card3.style.color = "transparent";
card3.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

card4.style.color = "transparent";
card4.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

card5.style.color = "transparent";
card5.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";

card2.classList.add("hidden");
card3.classList.add("hidden");
card4.classList.add("hidden");
card5.classList.add("hidden");

// CLICK BUTTONS
card1.addEventListener("click", function () {
    card1.style.backgroundColor = "black";
    card1.style.color = "white";
    card1.style.textDecoration = "line-through";

    card2.style.color = "black";
    card2.style.textShadow = "none";
    card2.classList.remove("hidden");
});

card2.addEventListener("click", function () {
    card2.style.backgroundColor = "black";
    card2.style.color = "white";
    card2.style.textDecoration = "line-through";

    card3.style.color = "black";
    card3.style.textShadow = "none";
    card3.classList.remove("hidden");
});

card3.addEventListener("click", function () {
    card3.style.backgroundColor = "black";
    card3.style.color = "white";
    card3.style.textDecoration = "line-through";

    card4.style.color = "black";
    card4.style.textShadow = "none";
    card4.classList.remove("hidden");
});

card4.addEventListener("click", function () {
    card4.style.backgroundColor = "black";
    card4.style.color = "white";
    card4.style.textDecoration = "line-through";

    card5.style.color = "black";
    card5.style.textShadow = "none";
    card5.classList.remove("hidden");
});

card5.addEventListener("click", function () {
    card5.style.backgroundColor = "black";
    card5.style.color = "white";
    card5.style.textDecoration = "line-through";

    setTimeout(function () {
        result.textContent = "??";
    }, 1000);
    setTimeout(function () {
        result.textContent = "?";
    }, 2000);
    setTimeout(function () {
        result.textContent = "";
    }, 3000);
    setTimeout(function () {
        result.textContent = 1089;
    }, 4000);
});

// RESET BUTTON
document.querySelector(".reset_button").addEventListener("click", function () {
    card1.style.backgroundColor = "white";
    card1.style.color = "black";
    card1.style.textDecoration = "none";

    card2.style.color = "transparent";
    card2.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
    card2.style.backgroundColor = "white";
    card2.style.textDecoration = "none";

    card3.style.color = "transparent";
    card3.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
    card3.style.backgroundColor = "white";
    card3.style.textDecoration = "none";

    card4.style.color = "transparent";
    card4.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
    card4.style.backgroundColor = "white";
    card4.style.textDecoration = "none";

    card5.style.color = "transparent";
    card5.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
    card5.style.backgroundColor = "white";
    card5.style.textDecoration = "none";

    card2.classList.add("hidden");
    card3.classList.add("hidden");
    card4.classList.add("hidden");
    card5.classList.add("hidden");

    result.textContent = "???";
});

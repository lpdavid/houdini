const slot1 = document.querySelector(".slot1");
const slot2 = document.querySelector(".slot2");
const slot3 = document.querySelector(".slot3");
const slot4 = document.querySelector(".slot4");
const cards = document.querySelectorAll(".cards-single");
const button = document.querySelector(".btn");
const pageLink = document.querySelector(".page-link");

// CARREGAMENTO AUTOMÁTICO DO BOTÃO
window.onload = function () {
    button.click();
};

// FUNÇÃO DE CARTAS ALEATÓRIAS
button.addEventListener("click", function () {
    const numArr = ["1", "2", "3", "4"];

    let index1 = Math.floor(Math.random() * numArr.length);
    let position1 = Number(numArr.splice(index1, 1));
    slot1.src = `/images/cards_images/card${position1}.png`;

    let index2 = Math.floor(Math.random() * numArr.length);
    let position2 = Number(numArr.splice(index2, 1));
    slot2.src = `/images/cards_images/card${position2}.png`;

    let index3 = Math.floor(Math.random() * numArr.length);
    let position3 = Number(numArr.splice(index3, 1));
    slot3.src = `/images/cards_images/card${position3}.png`;

    let index4 = Math.floor(Math.random() * numArr.length);
    let position4 = Number(numArr.splice(index4, 1));
    slot4.src = `/images/cards_images/card${position4}.png`;
});

//FUNÇÃO DE VIRAR AS CARTAS

cards.forEach((card) =>
    card.addEventListener("click", function flipCard() {
        const img = this.querySelector(".cards-image");
        this.classList.toggle("flip");
        if (img.src.includes("/card4.png")) {
            setTimeout(function () {
                window.open("/main.html", "_self");
            }, 550);
        }
    })
);

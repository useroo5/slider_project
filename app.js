const cards = document.querySelectorAll(' .card_item');


cards.forEach(card => {
    card.onclick = () => {

        removeActiveClass();
        card.classList.add("active");
        card.style.boxShadow = "1px 5px 12px 4px grey";
    }
})


function removeActiveClass() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active");
        cards[i].style.boxShadow = "none";
    }
}


// Зміна фону

function changeBG(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function () {
    let body = document.querySelector("body");
    let randomColor = `rgb(${changeBG(0, 255)}, ${changeBG(0, 255)}, ${changeBG(0, 255)})`;
    body.style.backgroundColor = randomColor;
}, 3000);

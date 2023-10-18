const cardContainer = document.querySelector(".container-pembungkus");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    if (currentIndex < cardContainer.children.length - 3) {
        currentIndex++;
        updateCardVisibility();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardVisibility();
    }
});

function updateCardVisibility() {
    for (let i = 0; i < cardContainer.children.length; i++) {
        if (i >= currentIndex && i < currentIndex + 3) {
            cardContainer.children[i].style.display = "grid";
        } else {
            cardContainer.children[i].style.display = "none";
        }
    }
}

updateCardVisibility();
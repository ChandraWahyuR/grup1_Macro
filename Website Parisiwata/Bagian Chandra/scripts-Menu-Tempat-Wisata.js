// Filter
function showDropdown(inputId) {
    const inputElement = document.getElementById(inputId);
    const dropdownElement = document.getElementById(`dropdown-${inputId}`);
    const inputValue = inputElement.value.toLowerCase(); 
    const dropdownData = [
        "Kabupaten Situ",
        "Kabupaten Mana",
        "Kabupaten Nggatahu",
        "Masih bingung Kotanya"
    ];
    const filteredData = dropdownData.filter(item => item.toLowerCase().includes(inputValue));


    if (filteredData.length > 0) {
        dropdownElement.innerHTML = ""; 
        filteredData.forEach(item => {
            const option = document.createElement("div");
            option.textContent = item;
            option.addEventListener("click", () => {
                inputElement.value = item;
                dropdownElement.innerHTML = ""; 
            });
            dropdownElement.appendChild(option);
        });
        dropdownElement.style.display = "block";
    } else {
        dropdownElement.style.display = "none"; 
    }
}


document.addEventListener("click", function (e) {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        if (!input.contains(e.target)) {
            const dropdown = document.getElementById(`dropdown-${input.id}`);
            if (dropdown) {
                dropdown.style.display = "none";
            }
        }
    });
});

// Card Kategori
const cardContainer = document.querySelector(".container-pembungkus");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    if (currentIndex < cardContainer.children.length - 4) {
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
        if (i >= currentIndex && i < currentIndex + 4) {
            cardContainer.children[i].style.display = "block";
        } else {
            cardContainer.children[i].style.display = "none";
        }
    }
}


updateCardVisibility();


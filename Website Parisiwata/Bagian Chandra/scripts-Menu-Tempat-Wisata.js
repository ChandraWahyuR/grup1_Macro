// Filter
let kab = ["Lampung", "Medan",  "NTT", "Purbalingga", "Tapanuli"]
let kotaA = ["Bandra Lampung","Metro", "Menggala", "Gunung Agung", "Kedaton"]
let kotaB = ["Medan Tuntungan","Medan Johor", "Medan Amplas", "Medan Denai", "Medan Kota", "Medan Area"]
let kotaC = ["","C2", "", "", ""]
let kotaD = ["Medan Tuntungan","Medan Johor", "Medan Amplas", "Medan Denai", "Medan Kota", "Medan Area"]
let kotaE = ["Medan Tuntungan","Medan Johor", "Medan Amplas", "Medan Denai", "Medan Kota", "Medan Area"]

let sclt1 = document.getElementById("kab-drop")
let sclt2 = document.getElementById("kot-drop")

kab.forEach(function addkab(item){
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    sclt1.appendChild(option);
});

sclt1.onchange = function() {
    sclt2.innerHTML = "<option>Kota</option>";
    if(this.value == "Lampung"){
        addToSlct2(kotaA)
    }
    if(this.value == "Medan"){
        addToSlct2(kotaB)
    }
    if(this.value == "NTT"){
        addToSlct2(kotaC)
    }
    if(this.value == "Purbalingga"){
        addToSlct2(kotaD)
    }
    if(this.value == "Tapanuli"){
        addToSlct2(kotaE)
    }
}

function addToSlct2(arr){
    arr.forEach(function (item){
        let option = document.createElement("option")
        option.text = item;
        option.value = item;
        sclt2.append(option)
    })
}

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


let i = localStorage.getItem("iditem");
const div = document.querySelector('.footwear-list');
const dive = document.createElement('div');

dive.className = "footwear-item";
const obj = [
    {
        id: 0,
        image: "assets/item/img",
        name: "Maison Margiela Fusion Low Sneakers",
        type: "Кроссовки",
        price: "92 000"
    }

]
const img = document.createElement('img');
img.setAttribute("src", obj[0].image+i+'.png');
dive.id = "id"+i;
div.appendChild(dive);
dive.appendChild(img);



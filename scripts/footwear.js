const div = document.querySelector('.footwear-list');
const obj = [
    {
        id: 0,
        image: "assets/item/img",
        name: "Maison Margiela Fusion Low Sneakers",
        type: "Кроссовки",
        price: "92 000"
    }

]
for (let i = 0; i < 16; i++) {
    const dive = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute("src", obj[0].image+i+'.png');
    dive.className = "footwear-item";
    dive.id = "id"+i;
    console.log("id"+i)
    const header = document.createElement('a');
    const description = document.createElement('span');
    const price = document.createElement('span');
    description.className = "footwear-description";
    price.className = 'footwear-price';
    header.className = "footwear-header";
    header.setAttribute("href", "");
    header.innerHTML = obj[0].name;
    description.innerHTML = obj[0].type;
    price.innerHTML = obj[0].price;
dive.appendChild(img);
div.appendChild(dive);
dive.appendChild(header);
dive.appendChild(description);
dive.appendChild(price);
    
}
const item = document.querySelectorAll(".footwear-item");
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(){
        let attr =item[i].getAttribute('id');
        ide = attr.replace('id','');
        // alert(ide);
        localStorage.setItem("iditem", ide);
        // div.innerHTML = '';
        window.open('http://localhost:3000/item.html');
    });
    
}
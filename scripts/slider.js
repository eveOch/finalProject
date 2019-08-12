const imageChange = document.querySelectorAll('.footwear-list-item-mini > img');
const imageItem = document.querySelector('.footwear-item > img')
for (let index = 0; index < imageChange.length; index++) {
    imageChange[index].addEventListener('click', function() {
        let att = imageChange[index].getAttribute("src")
        imageItem.setAttribute("src", att);
    })
    
}
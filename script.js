console.log(window.innerWidth) //breedte
console.log(window.innerHeight) //hoogte

const imageNames = ["tyler1.jpg", "tyler2.png", "tyler3.jpg", "tyler4.png", "tyler5.jpg", "tyler6.jpg", "tyler7.jpg", "tyler8.jpg"]
const tumbs = document.getElementById('tumbs');
const display = document.getElementById('display');
let current = 0;
selectImage(Math.floor(Math.random() * imageNames.length));


for (let i = 0, max = imageNames.length; i < max; i++) {
    let tumb = new Image();
    tumb.src = "fotos/small/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click", function (e) {
        selectImage(e.target.id);
    });
}

function selectImage(id) {
    display.src = "fotos/big/" + imageNames[id];
}

function cycle(direction){
    if (direction) {
        current--;
        if (current < 0) {
            current = imageNames.length - 1;
        }
        selectImage(current);
    } else {
        current++;
        if (current >= imageNames.length) {
            current = 0;
        }
        selectImage(current);
    }
}

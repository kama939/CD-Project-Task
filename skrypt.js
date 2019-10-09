function GoToWeapons() {

    document.getElementById("weaponsPlayer").style.display = "block";
    document.getElementById("consumablesPlayer").style.display = "none";
    document.getElementById("craftingMaterialsPlayer").style.display = "none";
    document.getElementById("questItemPlayer").style.display = "none";

    document.getElementById("weaponsVendor").style.display = "block";
    document.getElementById("consumablesVendor").style.display = "none";
    document.getElementById("craftingMaterialsVendor").style.display = "none";
    document.getElementById("questItemsVendor").style.display = "none";
}

function GoToConsumables() {


    document.getElementById("weaponsPlayer").style.display = "none";
    document.getElementById("consumablesPlayer").style.display = "block";
    document.getElementById("craftingMaterialsPlayer").style.display = "none";
    document.getElementById("questItemPlayer").style.display = "none";

    document.getElementById("weaponsVendor").style.display = "none";
    document.getElementById("consumablesVendor").style.display = "block";
    document.getElementById("craftingMaterialsVendor").style.display = "none";
    document.getElementById("questItemsVendor").style.display = "none";
}

function GoToCraftMaterials() {

    document.getElementById("weaponsPlayer").style.display = "none";
    document.getElementById("consumablesPlayer").style.display = "none";
    document.getElementById("craftingMaterialsPlayer").style.display = "block";
    document.getElementById("questItemPlayer").style.display = "none";
    
    document.getElementById("weaponsVendor").style.display = "none";
    document.getElementById("consumablesVendor").style.display = "none";
    document.getElementById("craftingMaterialsVendor").style.display = "block";
    document.getElementById("questItemsVendor").style.display = "none";
}

function GoToQuestItem() {

    document.getElementById("weaponsPlayer").style.display = "none";
    document.getElementById("consumablesPlayer").style.display = "none";
    document.getElementById("craftingMaterialsPlayer").style.display = "none";
    document.getElementById("questItemPlayer").style.display = "block";

    document.getElementById("weaponsVendor").style.display = "none";
    document.getElementById("consumablesVendor").style.display = "none";
    document.getElementById("craftingMaterialsVendor").style.display = "none";
    document.getElementById("questItemsVendor").style.display = "block";
}


/*document.addEventListener('click', function(e) {

    e = e || window.event;

    if (Object.keys(e.path).length > 10) {

        const hammerQuantity = document.createElement("div");
        hammerQuantity.innerText = 1;
        hammerQuantity.classList.add("weaponQuantity");

        const hammerX = document.createElement("div");
        hammerX.innerText = " x ";
        hammerX.classList.add("hammerX");

        const hammerName = document.createElement("div");
        hammerName.innerText = e.path[1].firstElementChild.innerText;
        hammerName.classList.add("main_item");

        const hammerPrice = document.createElement("div");
        hammerPrice.id = "weaponPrice";
        hammerPrice.innerText = e.path[3].firstElementChild.lastElementChild.lastElementChild.innerText;
        hammerPrice.classList.add("weaponQuantity");

        const hammerAdd = document.createElement("button");
        hammerAdd.id = "weaponAdd";
        hammerAdd.classList.add("weaponAdd");

        const hammerRemove = document.createElement("button");
        hammerRemove.id = "weaponAdd";
        hammerRemove.classList.add("weaponAdd");

        const div = document.querySelector(".sum_box");

        const dviMain1 = document.createElement("div");
        dviMain1.classList.add("box1");
        dviMain1.appendChild(hammerQuantity);
        dviMain1.appendChild(hammerX);
        dviMain1.appendChild(hammerName);

        const dviMain2 = document.createElement("div");
        dviMain2.classList.add("box2");
        dviMain2.appendChild(hammerPrice);
        dviMain2.appendChild(hammerAdd);
        dviMain2.appendChild(hammerRemove);

        div.appendChild(dviMain1)
        div.appendChild(dviMain2)
    }
}, false);
*/
function buttonClick(e) {

    const hammerQuantity = document.createElement("div");
    hammerQuantity.innerText = 1;
    hammerQuantity.classList.add("weaponQuantity");

    const hammerX = document.createElement("div");
    hammerX.innerText = " x ";
    hammerX.classList.add("hammerX");

    const hammerName = document.createElement("div");
    hammerName.innerText = e.lastElementChild.firstElementChild.innerText;
    hammerName.classList.add("main_item");

    const hammerPrice = document.createElement("div");
    hammerPrice.id = "weaponPrice";
    hammerPrice.innerText = e.lastElementChild.lastElementChild.innerText;
    hammerPrice.classList.add("weaponQuantity");

    const hammerAdd = document.createElement("button");
    hammerAdd.id = "weaponAdd";
    hammerAdd.classList.add("weaponAdd");

    const hammerRemove = document.createElement("button");
    hammerRemove.id = "weaponAdd";
    hammerRemove.classList.add("weaponAdd");

    const div = document.querySelector(".sum_box");

    const dviMain1 = document.createElement("div");
    dviMain1.classList.add("box1");
    dviMain1.appendChild(hammerQuantity);
    dviMain1.appendChild(hammerX);
    dviMain1.appendChild(hammerName);

    const dviMain2 = document.createElement("div");
    dviMain2.classList.add("box2");
    dviMain2.appendChild(hammerPrice);
    dviMain2.appendChild(hammerAdd);
    dviMain2.appendChild(hammerRemove);

    div.appendChild(dviMain1)
    div.appendChild(dviMain2)
}



let resizeReset = function() {
    w = canvasBody.width = window.innerWidth;
    console.log(window)
    h = canvasBody.height = window.innerHeight;
}

const opts = {
    particleColor: "rgb(32, 65, 62)",
    lineColor: "rgb(52, 203, 194)",
    particleAmount: 30,
    defaultSpeed: 1,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 200,
};

window.addEventListener("resize", function() {
    deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs) {
    for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) {
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
            drawArea.beginPath();
            drawArea.moveTo(point1.x, point1.y);
            drawArea.lineTo(hubs[i].x, hubs[i].y);
            drawArea.closePath();
            drawArea.stroke();
        }
    }
}

Particle = function(xPos, yPos) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
    this.directionAngle = Math.floor(Math.random() * 360);
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
    this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
    };
    this.update = function() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
    };
    this.border = function() {
        if (this.x >= w || this.x <= 0) {
            this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    };
    this.draw = function() {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
    };
};

function setup() {
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
    }
    window.requestAnimationFrame(loop);
}

function loop() {
    window.requestAnimationFrame(loop);
    drawArea.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    for (let i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
    }
}

const canvasBody = document.getElementById("canvas"),
    drawArea = canvasBody.getContext("2d");
let delay = 200,
    tid,
    rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();
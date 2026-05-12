const Momo = document.querySelector(".Dumplings");
const counter = document.querySelector(".count");
const persec = document.querySelector(".persec");
const cursorPurchase = document.getElementById("Cursor");
const steamerPurchase = document.getElementById("Steamer");
const displayCursor = document.getElementById("cursorprice");
const displaySteamer = document.getElementById("steamerprice");

let clicks = 0;
let shopProg = 0;
let cursors = 0;
let cursorPrice = 5;
let steamers = 0;
let steamerPrice = 50;
let factories = 0;
let factoryPrice = 500;

Momo.addEventListener("click", () => {
    clicks += 1;
    console.log(`Clicked, counter: ${clicks}`);
    PriceUpdate()
    
    Momo.style.transition = "0.05s";
    Momo.classList.add("clicked")

    setTimeout(() => {
        Momo.classList.remove("clicked")
    }, 50);
    
    Momo.style.transition = "0.3s";
});

cursorPurchase.addEventListener("click", () => {
    if (clicks >= cursorPrice) {
        cursors += 1;
        clicks -= cursorPrice;
        cursorPrice = Math.floor(cursorPrice * 1.5);

        PriceUpdate()
    }
    else{
        //placeholder
    };

    if (shopProg == 1) {
        shopUpdate();
    };
});

steamerPurchase.addEventListener("click", () => {
    if (clicks >= steamerPrice) {
        steamers += 1;
        clicks -= steamerPrice;
        steamerPrice = Math.floor(steamerPrice * 1.5);

        PriceUpdate()
    }
    else{
        //placeholder
    };
    
    if (shopProg == 2) {
        shopUpdate();
    };
});

function addDumplings() {
    let add = cursors + steamers * 10 + factories * 50;
    console.log(add);

    clicks += add;
    PriceUpdate()
};

function PriceUpdate() {
    counter.textContent = `Dumplings: ${clicks}`;
    persec.textContent = `${cursors + steamers * 10 + factories * 50} Dumplings / per sec`;

    displayCursor.textContent = "$" + String(cursorPrice);
    displaySteamer.textContent = "$" + String(steamerPrice);
};

function shopUpdate() {
    shopProg += 1;

    if (shopProg == 1) {
        cursorPurchase.classList.add("show")
    }
    else if (shopProg == 2) {
        steamerPurchase.classList.add("show")
    }
    else if (shopProg == 3) {

    }
    else if (shopProg == 4) {
        
    }
};

counter.textContent = `Dumplings: ${clicks}`;
console.log("script successfully loaded.");

setInt = setInterval(addDumplings, 1000);
PriceUpdate();
shopUpdate();
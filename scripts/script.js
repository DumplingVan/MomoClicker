const Momo = document.querySelector(".Dumplings");
const counter = document.querySelector(".count");
const persec = document.querySelector(".persec");
const cursorPurchase = document.getElementById("Cursor");
const steamerPurchase = document.getElementById("Steamer");
const factoryPurchase = document.getElementById("Dumpling-factory");
const friedPurchase = document.getElementById("Fried-Dumplings");
const displayCursor = document.getElementById("cursorprice");
const displaySteamer = document.getElementById("steamerprice");
const displayFactory = document.getElementById("factoryprice");
const displayFried = document.getElementById("friedprice");

let clicks = 0;
let shopProg = 1;

class Item {
    static allItems = [];

    constructor(element, priceDisplay, Name, Price, amount, Prog) {
        this.element = element;
        this.priceDisplay = priceDisplay;
        this.Name = Name;
        this.Price = Price;
        this.amount = amount;
        this.Prog = Prog;

        Item.allItems.push(this);
        this.priceDisplay.textContent = `$${this.Price}`
        element.addEventListener("click", this.Purchase);
    }
    Purchase = event => {
        if (clicks >= this.Price) {
            this.amount += 1;
            clicks -= this.Price;
            this.Price = Math.floor(this.Price * 1.5);
            this.priceDisplay.textContent = `$${this.Price}`
            
            CountUpdate()
        }
        else{
            //placeholder
        };

        if (this.Prog == shopProg) {
            shopProg += 1;
            Item.allItems.forEach(items => items.shopUpdate());
        }
    }
    shopUpdate() {
        if (shopProg == this.Prog) {
            this.element.classList.add("show");
        }
    };
}

Momo.addEventListener("click", () => {
    clicks += 1;
    console.log(`Clicked, counter: ${clicks}`);
    CountUpdate()
    
    Momo.style.transition = "0.05s";
    Momo.classList.add("clicked")

    setTimeout(() => {
        Momo.classList.remove("clicked")
    }, 50);
    
    Momo.style.transition = "0.3s";
});

function addDumplings() {
    let add = Cursors.amount + Steamers.amount * 10 + Factories.amount * 50;
    console.log(add);

    clicks += add;
    CountUpdate()
};

function CountUpdate (){
    counter.textContent = `Dumplings: ${clicks}`;
    persec.textContent = `${Cursors.amount + Steamers.amount * 10 + Factories.amount * 50} Dumplings / per sec`;
}

console.log("script successfully loaded.");
let Cursors = new Item(cursorPurchase, displayCursor, "Cursor", 5, 0, 1);
let Steamers = new Item(steamerPurchase, displaySteamer, "Steamer", 50, 0, 2);
let Factories = new Item(factoryPurchase, displayFactory, "Factory", 500, 0, 3);
let FriedMomos = new Item(friedPurchase, displayFried, "Fried Momos", 10000, 0, 4);

counter.textContent = `Dumplings: ${clicks}`;
cursorPurchase.classList.add("show")

CountUpdate();
setInt = setInterval(addDumplings, 1000);
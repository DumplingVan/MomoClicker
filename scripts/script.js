const Momo = document.querySelector(".Dumplings");
const counter = document.querySelector(".count");
const persec = document.querySelector(".persec");
const cursorPurchase = document.getElementById("Cursor");
const displayCursor = document.getElementById("cursorprice");
const steamerPurchase = document.getElementById("Steamer");
const displaySteamer = document.getElementById("steamerprice");
const factoryPurchase = document.getElementById("Dumpling-factory");
const displayFactory = document.getElementById("factoryprice");
const friedPurchase = document.getElementById("Fried-Dumplings");
const displayFried = document.getElementById("friedprice");
const profPurchase = document.getElementById("ProfessionalChef");
const displayProf = document.getElementById("profprice");

let clicks = 0;
let shopProg = 1;
let Dpersec = 0;

class Item {
    static allItems = [];

    constructor(element, priceDisplay, Price, Value, Prog) {
        this.element = element;
        this.priceDisplay = priceDisplay;
        this.Price = Price;
        this.Value = Value;
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
            Dpersec += this.Value;

            if (this.Prog == shopProg) {
                shopProg += 1;

                Item.allItems.forEach(items => items.shopUpdate());
            }

            CountUpdate()
        }
        else{
            //placeholder
        };
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
    clicks += Dpersec;
    CountUpdate()
};

function CountUpdate (){
    counter.textContent = `Dumplings: ${clicks}`;
    persec.textContent = `${Dpersec} Dumplings / per sec`;
}

console.log("script successfully loaded.");
let Cursors = new Item(cursorPurchase, displayCursor, 5, 1, 1);
let Steamers = new Item(steamerPurchase, displaySteamer, 50, 10, 2);
let Factories = new Item(factoryPurchase, displayFactory, 500, 50, 3);
let FriedMomos = new Item(friedPurchase, displayFried, 10000, 1000, 4);
let ProfChefs = new Item(profPurchase, displayProf, 500000, 5000, 5);

counter.textContent = `Dumplings: ${clicks}`;
cursorPurchase.classList.add("show")

CountUpdate();
setInt = setInterval(addDumplings, 1000);
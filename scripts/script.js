const Momo = document.querySelector(".Dumplings");
const counter = document.querySelector(".count");

let clicks = 0;

Momo.addEventListener("click", () => {
    clicks += 1;
    console.log(`Clicked, counter: ${clicks}`);
    counter.textContent = `Dumplings: ${clicks}`;

    Momo.style.transition = "0.05s";
    Momo.classList.add("clicked")

    setTimeout(() => {
        Momo.classList.remove("clicked")
    }, 50);
    
    Momo.style.transition = "0.3s";
});

counter.textContent = `Dumplings: ${clicks}`;
console.log("script successfully loaded.");
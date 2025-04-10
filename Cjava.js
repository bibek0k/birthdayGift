const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
const page1 = document.getElementById("first");
const page2 = document.getElementById("second");
const page3 = document.getElementById("third");
const page4 = document.getElementById("fourth");


b1.addEventListener("click",() => {
    page1.style.display = "none";
    page2.classList.remove("hidden");
});

b2.addEventListener("click",() => {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
});

b3.addEventListener("click",() => {
    page3.classList.add("hidden");
    page4.classList.remove("hidden");
});

const flowr = document.querySelector(".flow");
let Photo = true;

flowr.addEventListener("click", () => {
    if (Photo) {
        flowr.src = "flower.svg"; 
    } else {
        flowr.src = "photo.svg";
    }
    Photo = !Photo;
});


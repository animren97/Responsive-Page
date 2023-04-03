let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let navbar = document.querySelector(".navbar__menu")

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
   
    navbar.classList.remove("hidden")

})

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    navbar.classList.add("hidden")

})


const icon = document.getElementById("icon");

console.log(document.body.className)

icon.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-theme");
})
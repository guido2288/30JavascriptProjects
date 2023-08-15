const submitBtn = document.getElementById("submitBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

submitBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}
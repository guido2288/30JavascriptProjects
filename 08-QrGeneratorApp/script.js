const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");

function generateQr() {
    if(qrText.value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add("show-img");
    } else{
        qrText.classList.add("error");
        setTimeout(()=> {
            qrText.classList.remove("error")
        },1000)
    }
}

generateBtn.addEventListener("click", generateQr)
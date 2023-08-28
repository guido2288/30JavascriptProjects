let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", () =>{
    productImg.src = "./images/image1.png";
    for(bt of btn){
        bt.classList.remove("active");
    };
    btn[0].classList.add("active");
})

btn[1].addEventListener("click", () =>{
    productImg.src = "./images/image2.png";
    for(bt of btn){
        bt.classList.remove("active");
    };

    btn[1].classList.add("active");
})


btn[2].addEventListener("click", () =>{
    productImg.src = "./images/image3.png";
    for(bt of btn){
        bt.classList.remove("active");
    };

    btn[2].classList.add("active");
})


console.log(btn)
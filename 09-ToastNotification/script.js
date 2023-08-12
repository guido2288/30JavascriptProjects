const btns = document.getElementById("btns");
const toastBox = document.getElementById("toastBox");

btns.addEventListener('click', showToast)


function showToast(e) {
    console.log(e.target.innerText)

    let toast = document.createElement("div");
    let icon = document.createElement("box-icon");
    toast.classList.add("toast");

    if (e.target.innerText === "Success") {
        toast.innerHTML = "Successfully submitted";
        
        icon.setAttribute("name" ,"check-circle");
        icon.setAttribute("color", "green");
        icon.setAttribute( "size","md")
    } else if(e.target.innerText === "Error"){
        toast.innerHTML = "Please fix the error!";
        toast.classList.add("error")
        icon.setAttribute("name" ,"x-circle");
        icon.setAttribute("color", "red");
        icon.setAttribute( "size","md")
    } else if(e.target.innerText === "Invalid"){
        icon.setAttribute("name", "error-circle");
        toast.classList.add("invalid")
        icon.setAttribute("color", "orange");
        icon.setAttribute( "size","md")
        toast.innerHTML = "Invalid input check again";
    }

    toast.appendChild(icon);
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove()
    },5000);
}
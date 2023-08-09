const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('addBtn');


function addTask() {
    if(inputBox.value == ""){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("box-icon");
        span.className = "span"
        span.setAttribute("name", "x");

        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
};

function toggleTask(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === "BOX-ICON"){
        e.target.parentElement.remove();
        saveData()
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

addBtn.addEventListener('click', addTask);

listContainer.addEventListener('click', toggleTask);

showList();
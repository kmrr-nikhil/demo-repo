/newProject/public/index.js
const form = document.querySelector('form');
const fetchBtn = document.querySelector('#fetch');

function insert(event) {
    event.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const mob = form.elements["mobile"].value;
    console.log(name, email, mob);
}

function fetchall() {
    // Your fetch logic here
    console.log("Fetch all clicked");
}

form.addEventListener('submit', insert);
fetchBtn.addEventListener('click', fetchall);
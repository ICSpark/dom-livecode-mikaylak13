let header = document.getElementById("main-title")

header.style.textAlign = "center"; 

let description = document.getElementById("description")

description.style.textAlign="center";

let pizzaList = document.getElementById("pizza-list");

pizzaList.style.justifyContent = "space-around";

let pizzaImages = document.getElementsByClassName("pizza-img");

pizzaImages[1].src = "images/veggie.png";

let pizzas = document.getElementsByClassName("pizza");

pizzas[0].style.color = "red";
pizzas[2].style.color = "orange";
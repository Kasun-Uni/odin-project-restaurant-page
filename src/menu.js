// src/menu.js
function loadMenu() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const list = document.createElement("ul");
  const items = ["Pizza - $10", "Burger - $8", "Salad - $6", "Pasta - $9"];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  content.appendChild(heading);
  content.appendChild(list);
}

export default loadMenu;

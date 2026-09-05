// src/home.js
function loadHome() {
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600";
  img.alt = "Restaurant food";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Tasty Table";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We serve the best homemade food in town, made with love and fresh ingredients every day!";

  content.appendChild(img);
  content.appendChild(heading);
  content.appendChild(paragraph);
}

export default loadHome;
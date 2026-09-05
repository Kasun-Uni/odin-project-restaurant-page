// src/about.js
function loadAbout() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Tasty Table has been serving the community since 2010. We believe in fresh food and friendly service.";

  content.appendChild(heading);
  content.appendChild(paragraph);
}

export default loadAbout;

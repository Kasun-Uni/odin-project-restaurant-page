// src/contact.js
function loadContact() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Call us at 555-1234 or visit us at 123 Main Street.";

  content.appendChild(heading);
  content.appendChild(paragraph);
}

export default loadContact;

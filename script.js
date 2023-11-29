function showProjectDetails() {
  let para = document.querySelectorAll(".mockup-paragraph");

  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let information = document.querySelector(".information");
  information.addEventListener("click", showProjectDetails);
});

//flip image function
function flipCoin() {
  var image = document.querySelector(".profile-photo");
  if (image.src.endsWith("vicky.png")) {
    image.src = "./resources/images/undrawillustrate1.png";
  } else {
    image.src = "./resources/images/vicky.png";
  }
}
// Retrieve the DOM element
const typingTextElement = document.getElementById("typing-text");
const typingTextContent = typingTextElement.innerHTML;

// Replace the content with an empty string to start the animation
typingTextElement.innerHTML = "";

// Loop through each character and append to the element with delay
for (let i = 0; i < typingTextContent.length; i++) {
  setTimeout(() => {
    typingTextElement.innerHTML += typingTextContent.charAt(i);
  }, i * 500);
}

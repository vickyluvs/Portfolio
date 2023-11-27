function showProjectDetails() {
  let para = document.querySelector(".mockup-paragraph");

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

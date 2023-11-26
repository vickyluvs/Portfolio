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

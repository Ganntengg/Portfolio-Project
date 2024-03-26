const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("ulHamb");
let width = 0;
window.addEventListener("resize", detectResize);

hamburger.onclick = () => {
  if (width <= 768) {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navUl.classList.replace("absolute", "hidden");
    } else if (!hamburger.classList.contains("active")) {
      hamburger.classList.add("active");
      navUl.classList.replace("hidden", "absolute");
    }
  }
};

function detectResize(e) {
  width = e.currentTarget.innerWidth;
  if (width > 768) {
    hamburger.classList.remove("active");
    navUl.classList.replace("absolute", "hidden");
  }
}

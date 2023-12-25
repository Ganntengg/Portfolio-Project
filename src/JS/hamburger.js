const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("ulHamb");
console.log(navUl);

hamburger.onclick = () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    navUl.classList.replace("absolute", "hidden");
  } else if (!hamburger.classList.contains("active")) {
    hamburger.classList.add("active");
    navUl.classList.replace("hidden", "absolute");
  }
};

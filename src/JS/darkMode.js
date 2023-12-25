const root = document.querySelector("html");
const toggler = document.getElementById("darkMode");

function darkToggle() {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    toggler.classList.replace("fa-solid", "fa-regular");
    toggler.style.color = "#828c9b";
  } else {
    root.classList.add("dark");
    toggler.classList.replace("fa-regular", "fa-solid");
    toggler.style.color = "#0262f2";
  }
}

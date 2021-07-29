const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((pl) => pl.addEventListener("click", toggleOpen));
panels.forEach((pl) => pl.addEventListener("transitionend", toggleActive));

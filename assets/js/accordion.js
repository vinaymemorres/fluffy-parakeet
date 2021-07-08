const btns = document.getElementsByClassName("accordion__trigger");

Array.from(btns).forEach((element) => {
  element.addEventListener("click", () => {
    let panel = element.nextElementSibling;
    panel.classList.toggle("accordion__panel--expanded");
    console.log(element);
    removeClass();
  });
});


function removeClass() {
  const panel = document.querySelector('.accordion__panel');
  if (panel.classList.contains("accordion__panel--expanded")) {
    panel.classList.remove("accordion__panel--expanded");
  }
}


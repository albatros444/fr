const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".bar");
const slidingLinks = document.querySelector(".linksContainerMobile");
const blackout = document.querySelector(".blackout");
/////*********** */
hamburger.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
  slidingLinks.classList.toggle("linksContActive");
  blackout.classList.toggle("blackoutActive");
});

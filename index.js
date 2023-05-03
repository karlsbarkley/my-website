const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("show");
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");

    const accordionContent = header.nextElementSibling;
    const accordionSVG = header.querySelector(".my-svg");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      accordionSVG.setAttribute("stroke", "#7a6c62");
      accordionSVG.setAttribute("d", "M 1 1 l 8 8 8-8");
    } else {
      accordionContent.style.display = "block";
      accordionSVG.setAttribute("stroke", "#f4f3f2");
      accordionSVG.setAttribute("d", "M 1 9 l 8 -8 l 8 8");
    }
  });
});

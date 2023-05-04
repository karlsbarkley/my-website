const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("show");
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");
let activeHeader = null;

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.toggle("active");
      const activeContent = activeHeader.nextElementSibling;
      const activeSVG = activeHeader.querySelector(".my-svg");
      activeContent.style.display = "none";
      activeSVG.setAttribute("stroke", "#7a6c62");
      activeSVG.setAttribute("d", "M 1 1 l 8 8 8-8");
    }
    header.classList.toggle("active");

    const accordionContent = header.nextElementSibling;
    const accordionSVG = header.querySelector(".my-svg");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      accordionSVG.setAttribute("stroke", "#7a6c62");
      accordionSVG.setAttribute("d", "M 1 1 l 8 8 8-8");
      activeHeader = null;
    } else {
      accordionContent.style.display = "block";
      accordionSVG.setAttribute("stroke", "#f4f3f2");
      accordionSVG.setAttribute("d", "M 1 9 l 8 -8 l 8 8");
      activeHeader = header;
    }
  });
});

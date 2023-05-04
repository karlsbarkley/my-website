const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");
const dropdownLinks = document.querySelectorAll(".dropdown a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("show");
});

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdown.classList.remove("show");
    burger.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown") && !e.target.closest(".burger")) {
    dropdown.classList.remove("show");
    burger.classList.remove("active");
  }
});

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleDesktopMode(e) {
  if (e.matches) {
    dropdown.classList.remove("show");
    burger.classList.remove("active");
  }
}

mediaQuery.addListener(handleDesktopMode);
handleDesktopMode(mediaQuery);

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

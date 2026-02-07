import { initScrollReveal } from "./modules/scrollReveal.js";
import { initMagneticButtons } from "./modules/magnetic.js";
import { initCardTilt } from "./modules/cardTilt.js";
import { initPageTransitions } from "./modules/pageTransition.js";
import { initScrollProgress } from "./modules/scrollProgress.js";
import { initCursorRing } from "./modules/cursor.js";
import { init3DBackground } from "./modules/canvas.js";





import "./styles/main.css";

import { createNavbar } from "./modules/navbar.js";
import { createHero } from "./modules/hero.js";
import { createAbout } from "./modules/about.js";
import { createSkills } from "./modules/createSkills.js";
import { createProjects } from "./modules/projects.js";
import { createContact } from "./modules/contact.js";
import { createFooter } from "./modules/footer.js";





const app = document.getElementById("app");

app.append(
  createNavbar(),
  createHero(),
  createAbout(),
  createSkills(),
  createProjects(),
  createContact(),
  createFooter()
  
);

initScrollReveal();
initMagneticButtons();
initCardTilt();
initPageTransitions();
initScrollProgress();
initCursorRing();
init3DBackground();






function animateSkills() {
  document.querySelectorAll(".meter-fill").forEach(el => {
    const level = el.dataset.level;
    el.style.width = level + "%";
  });
}


/* trigger when skills section appears */
const skillsSection = document.querySelector("#skills");

if (skillsSection) {
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateSkills();
      io.disconnect();
    }
  });

  io.observe(skillsSection);
}







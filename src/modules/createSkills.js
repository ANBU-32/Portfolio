import { skills } from "./portfolioData.js";

export function createSkills() {
  const s = document.createElement("section");
  s.id = "skills";
  s.className = "section";

  s.innerHTML = `
    <h2>Skills & Tech Stack</h2>

    <div class="skill-square-grid">
      ${skills.map(sk => `
        <div class="skill-square card">

          <div class="skill-icon">${sk.icon}</div>
          <div class="skill-name">${sk.name}</div>

          <div class="circle-chart"
               data-percent="${sk.level}">
            <svg viewBox="0 0 120 120">
              <circle class="bg" cx="60" cy="60" r="50"/>
              <circle class="fg" cx="60" cy="60" r="50"/>
            </svg>
            <div class="pct">${sk.level}%</div>
          </div>

        </div>
      `).join("")}
    </div>
  `;

  /* ✅ Run chart animation AFTER HTML exists */
  setTimeout(initCircleCharts, 50);

  return s;
}


/* =========================
   Circle Chart Animation
========================= */

function initCircleCharts() {
  document.querySelectorAll(".circle-chart")
    .forEach(chart => {

      const pct = chart.dataset.percent;
      const fg = chart.querySelector(".fg");

      const offset = 314 - (314 * pct / 100);
      fg.style.strokeDashoffset = offset;

    });
}

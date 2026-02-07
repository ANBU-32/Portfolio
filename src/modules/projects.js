export function createProjects() {
  const s = document.createElement("section");
  s.id = "projects";
  s.className = "section";

  let cards = "";

  for (let i = 1; i <= 6; i++) {
    cards += `<div class="card reveal">Project ${i}</div>`;
  }

  s.innerHTML = `
    <h2>Projects</h2>
    <div class="grid">${cards}</div>
  `;

  return s;
}


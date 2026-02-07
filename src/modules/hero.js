export function createHero() {
  const section = document.createElement("section");
  section.id = "hero";
  section.className = "hero-advanced";

  /* ---------- Background Layer ---------- */
  const bg = document.createElement("div");
  bg.className = "hero-bg";
  section.appendChild(bg);

  /* ---------- Content Wrapper ---------- */
  const container = document.createElement("div");
  container.className = "hero-container";

  /* ---------- Name ---------- */
  const name = document.createElement("h1");
  name.className = "hero-name";
  name.innerHTML = `Anbuselvan<span class="grad">V</span>`;

  /* ---------- Typing Role ---------- */
  const role = document.createElement("h2");
  role.className = "hero-role";
  role.textContent = "";
  container.appendChild(name);
  container.appendChild(role);

  /* ---------- Value Line ---------- */
  const tagline = document.createElement("p");
  tagline.className = "hero-tag";
  tagline.textContent =
    "I build structured, interactive web systems with performance and visual depth.";
  container.appendChild(tagline);

  /* ---------- Actions ---------- */
  const actions = document.createElement("div");
  actions.className = "hero-actions";

  const btn1 = document.createElement("button");
  btn1.textContent = "View Projects";
  btn1.className = "btn primary";

  const btn2 = document.createElement("button");
  btn2.textContent = "Contact";
  btn2.className = "btn ghost";

  actions.append(btn1, btn2);
  container.appendChild(actions);

  section.appendChild(container);

  /* ---------- Scroll Indicator ---------- */
  const scroll = document.createElement("div");
  scroll.className = "scroll-indicator";
  scroll.innerHTML = "Scroll ↓";
  section.appendChild(scroll);

  /* =======================================================
     ADVANCED BEHAVIOR
  ======================================================= */

  /* ---------- Typing Animation ---------- */
  const roles = [
    "Frontend Engineer",
    "Interactive UI Developer",
    "Animation Systems Builder",
    "Performance-Focused Coder"
  ];

  let r = 0, c = 0, deleting = false;

  function typeLoop() {
    const word = roles[r];
    role.textContent = deleting
      ? word.slice(0, c--)
      : word.slice(0, c++);

    if (!deleting && c === word.length + 1) {
      deleting = true;
      setTimeout(typeLoop, 900);
      return;
    }

    if (deleting && c === 0) {
      deleting = false;
      r = (r + 1) % roles.length;
    }

    setTimeout(typeLoop, deleting ? 40 : 70);
  }

  typeLoop();

  /* ---------- Mouse Parallax ---------- */
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  });

  /* ---------- Button Smooth Scroll ---------- */
  btn1.onclick = () => {
    document.querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  btn2.onclick = () => {
    document.querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return section;
}

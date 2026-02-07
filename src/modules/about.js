export function createAbout() {

  const section = document.createElement("section");
  section.id = "about";
  section.className = "section about";

  /* ===== 3D canvas ===== */

  const canvas = document.createElement("canvas");
  canvas.id = "about3d";
  section.appendChild(canvas);

  /* ===== layout ===== */

  const wrap = document.createElement("div");
  wrap.className = "about-flow";

  wrap.innerHTML = `

    <div class="about-side reveal">
      <div class="about-tag">Frontend</div>
      <div class="about-tag">3D UI</div>
      <div class="about-tag">Motion</div>
      <div class="about-tag">Interaction</div>
    </div>

    <div class="about-main reveal">

      <h2>About Me</h2>

      <p>
        I design and build interactive frontend systems that combine
        modern UI, animation, and 3D graphics to create experiences
        that feel alive and responsive.
      </p>

      <p>
        My work focuses on visual depth, motion clarity,
        and performance — turning complex ideas into
        elegant digital interfaces.
      </p>

      <p>
        I treat UI as a system — not just a layout.
      </p>

    </div>
  `;

  section.appendChild(wrap);

  return section;
}

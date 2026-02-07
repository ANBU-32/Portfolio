export function init3DBackground() {
  const canvas = document.getElementById("bg-3d");
  const app = document.getElementById("app");
  const ctx = canvas.getContext("2d");

  if (!canvas || !app) return;

  /* ---------- Resize ---------- */

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const CX = () => canvas.width / 2;
  const CY = () => canvas.height / 2;

  /* ---------- Camera based on APP scroll ---------- */

  let camZ = 0;
  let targetCamZ = 0;

  function updateCameraFromScroll() {
    const rect = app.getBoundingClientRect();
    const scrollInsideApp = -rect.top; // how much app has scrolled past top
    targetCamZ = Math.max(0, scrollInsideApp * 2.2);
  }

  window.addEventListener("scroll", updateCameraFromScroll);
  updateCameraFromScroll();

  /* ---------- Mouse relative to APP ---------- */

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", e => {
    const r = app.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
  });

  /* ---------- Stars ---------- */

  const stars = [];
  for (let i = 0; i < 700; i++) {
    stars.push({
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 2000,
      z: Math.random() * 2000
    });
  }

  /* ---------- Glass Cubes ---------- */

  const cubes = [];
  for (let i = 0; i < 18; i++) {
    cubes.push({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 1200,
      z: 400 + Math.random() * 1200,
      size: 40 + Math.random() * 60,
      rot: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.01
    });
  }

  /* ---------- Nebula ---------- */

  const nebulas = [];
  for (let i = 0; i < 6; i++) {
    nebulas.push({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      r: 200 + Math.random() * 300,
      hue: 190 + Math.random() * 40
    });
  }

  /* ---------- Projection ---------- */

  function project(x, y, z) {
    const scale = 900 / (z - camZ + 1);
    return {
      x: CX() + x * scale,
      y: CY() + y * scale,
      s: scale
    };
  }

  /* ---------- Draw Nebula ---------- */

  function drawNebula() {
    for (let n of nebulas) {
      const g = ctx.createRadialGradient(
        CX() + n.x,
        CY() + n.y,
        0,
        CX() + n.x,
        CY() + n.y,
        n.r
      );

      g.addColorStop(0, `hsla(${n.hue},80%,60%,0.18)`);
      g.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(CX() + n.x, CY() + n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* ---------- Draw Cube ---------- */

  function drawCube(px, py, size, rot) {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(rot);

    ctx.strokeStyle = "rgba(160,220,255,0.7)";
    ctx.fillStyle = "rgba(180,220,255,0.08)";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#7dd3fc";

    ctx.beginPath();
    ctx.rect(-size/2, -size/2, size, size);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  /* ---------- Draw Loop ---------- */

  function draw() {
    camZ += (targetCamZ - camZ) * 0.08;

    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawNebula();

    /* === Stars === */

    for (let s of stars) {
      s.z -= 6 + targetCamZ * 0.02;
      if (s.z < 1) s.z = 2000;

      const dx = mouseX - CX();
      const dy = mouseY - CY();
      s.x += dx * 0.0005;
      s.y += dy * 0.0005;

      const p = project(s.x, s.y, s.z);
      if (p.s <= 0) continue;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.s * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#7dd3fc";
      ctx.fill();
    }

    /* === Cubes === */

    for (let c of cubes) {
      c.rot += c.rotSpeed;
      c.z -= 2 + targetCamZ * 0.01;
      if (c.z < 200) c.z = 1600;

      const p = project(c.x, c.y, c.z);
      if (p.s <= 0) continue;

      drawCube(p.x, p.y, c.size * p.s, c.rot);
    }

    /* === Core Glow === */

    const g = ctx.createRadialGradient(CX(), CY(), 0, CX(), CY(), 180);
    g.addColorStop(0, "rgba(120,220,255,0.9)");
    g.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(CX(), CY(), 180, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
  }

  draw();
}

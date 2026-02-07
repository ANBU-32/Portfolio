export function initCursorRing() {

  const ring = document.createElement("div");
  const dot = document.createElement("div");

  ring.className = "cursor-ring";
  dot.className = "cursor-dot";

  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  window.addEventListener("pointermove", e => {
    mx = e.clientX;
    my = e.clientY;

    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  // hover grow on buttons + links
  const hoverTargets = "button, .btn, a, input";

  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener("mouseenter", () => {
      ring.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      ring.classList.remove("cursor-hover");
    });
  });

  // click pulse
  window.addEventListener("pointerdown", () => {
    ring.classList.add("cursor-click");
    setTimeout(() => ring.classList.remove("cursor-click"), 180);
  });

  function animate() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;

    ring.style.left = rx + "px";
    ring.style.top = ry + "px";

    requestAnimationFrame(animate);
  }

  animate();
}

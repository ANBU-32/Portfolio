export function initMagneticButtons() {

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {

    btn.addEventListener("mousemove", e => {

      const rect = btn.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform =
        `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;

    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });

  });

}

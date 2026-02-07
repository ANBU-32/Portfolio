export function initCardTilt() {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    card.style.transformStyle = "preserve-3d";

    card.addEventListener("mousemove", e => {

      const r = card.getBoundingClientRect();

      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      const rx = -y * 12;
      const ry = x * 12;

      card.style.transform =
        `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });

}

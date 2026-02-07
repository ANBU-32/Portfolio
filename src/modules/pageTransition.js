import { gsap } from "gsap";

let running = false;

function getOrCreateOverlay() {
  let el = document.getElementById("wave-overlay");
  if (el) return el;

  el = document.createElement("div");
  el.id = "wave-overlay";
  el.className = "wave-overlay";
  document.body.appendChild(el);

  return el;
}

function getScrollOffset(target) {
  const nav = document.querySelector(".nav");
  const navH = nav ? nav.offsetHeight : 0;

  return target.getBoundingClientRect().top +
         window.pageYOffset -
         navH;
}

function handleClick(e) {
  if (running) return;

  const link = e.currentTarget;
  const id = link.getAttribute("href");

  if (!id || id === "#") return;

  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  running = true;

  const overlay = getOrCreateOverlay();

  const tl = gsap.timeline({
    defaults: { ease: "power3.inOut" },
    onComplete: () => (running = false)
  });

  tl
    // wave expand
    .to(overlay, {
      clipPath: "circle(140% at 50% 50%)",
      duration: 0.75
    })

    // scroll mid-transition
    .add(() => {
      window.scrollTo({
        top: getScrollOffset(target),
        behavior: "auto"
      });
    })

    // wave collapse upward
    .to(overlay, {
      clipPath: "circle(0% at 50% 0%)",
      duration: 0.65
    });
}

export function initPageTransitions() {
  getOrCreateOverlay();

  document
    .querySelectorAll("a[href^='#']")
    .forEach(link => link.addEventListener("click", handleClick));
}

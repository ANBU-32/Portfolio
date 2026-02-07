import gsap from "gsap";

export function heroIntro() {
  gsap.from("#hero .reveal", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
}

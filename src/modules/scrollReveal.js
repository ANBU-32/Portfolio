export function initScrollReveal() {

  const els = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {

      if (e.isIntersecting) {
        e.target.classList.add("reveal-show");
      } else {
        e.target.classList.remove("reveal-show");
      }

    });
  }, {
    threshold: 0.25
  });

  els.forEach(el => {
    el.classList.add("reveal-ready");
    io.observe(el);
  });

}

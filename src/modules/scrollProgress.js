export function initScrollProgress() {

  const bar = document.createElement("div");
  bar.id = "scroll-progress";
  document.body.appendChild(bar);

  function update() {
    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percent = (scrollTop / height) * 100;
    bar.style.width = percent + "%";
  }

  window.addEventListener("scroll", update);
  update();
}

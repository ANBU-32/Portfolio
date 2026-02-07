export function createNavbar() {
  const nav = document.createElement("nav");
  nav.className = "nav";

  nav.innerHTML = `
    <div class="nav-inner">
      <div class="logo">ASCE</div>

      <div class="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>

        <!-- NEW SKILLS SECTION LINK -->
        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  `;

  const navInner = nav.querySelector(".nav-inner");

  return nav;
}

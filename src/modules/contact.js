export function createContact() {
  const s = document.createElement("section");
  s.id = "contact";
  s.className = "section contact-section";

  s.innerHTML = `
    <h2 class="section-title">Contact</h2>

    <p class="contact-sub">
      Open to internships, freelance, and full-time opportunities.
    </p>

    <div class="contact-grid">

      <a class="contact-card"
         href="https://www.linkedin.com/in/anbuselvan-v-6b249a2b6/"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit my LinkedIn profile">

        <div class="icon">🔗</div>
        <h3>LinkedIn</h3>
        <p>Connect professionally</p>
      </a>


      <a class="contact-card"
         href="https://github.com/ANBU-32"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit my GitHub profile">

        <div class="icon">💻</div>
        <h3>GitHub</h3>
        <p>View source code and repos</p>
      </a>


      <a class="contact-card"
         href="mailto:anbumr983@gmail.com"
         aria-label="Send me an email">

        <div class="icon">✉️</div>
        <h3>Email</h3>
        <p>Send a message</p>
      </a>


    </div>
  `;



  return s;
}

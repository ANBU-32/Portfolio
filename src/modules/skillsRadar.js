export function create3DRadar(canvas, skillsFlat) {
  const ctx = canvas.getContext("2d");

  const all = skillsFlat;
  const step = (Math.PI * 2) / all.length;

  let rx = 0;
  let ry = 0;

  /* ===== Mouse Tilt Input ===== */

  window.addEventListener("mousemove", e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    rx = x * 0.6;
    ry = y * 0.6;
  });

  /* ===== Draw Loop ===== */

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = 110;

    ctx.clearRect(0,0,w,h);

    /* grid rings */
    ctx.strokeStyle = "rgba(120,200,255,.25)";
    for (let g=1; g<=4; g++) {
      ctx.beginPath();
      for (let i=0;i<all.length;i++) {
        const a = i*step - Math.PI/2 + rx;
        const rr = r*g/4;
        ctx.lineTo(
          cx + Math.cos(a)*rr,
          cy + Math.sin(a + ry*0.3)*rr
        );
      }
      ctx.closePath();
      ctx.stroke();
    }

    /* data polygon with glow */
    ctx.beginPath();

    all.forEach((s,i)=>{
      const a = i*step - Math.PI/2 + rx;
      const rr = r*(s.level/100);

      ctx.lineTo(
        cx + Math.cos(a)*rr,
        cy + Math.sin(a + ry*0.3)*rr
      );
    });

    ctx.closePath();

    ctx.fillStyle = "rgba(96,165,250,.35)";
    ctx.fill();

    ctx.shadowBlur = 18;
    ctx.shadowColor = "#60a5fa";
    ctx.strokeStyle = "#60a5fa";
    ctx.stroke();
    ctx.shadowBlur = 0;

    requestAnimationFrame(draw);
  }

  draw();
}

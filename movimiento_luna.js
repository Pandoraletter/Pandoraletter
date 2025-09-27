
  const luna = document.querySelector(".luna");
  let posY = 0;     
  let targetY = 0;  

  function animar() {
    posY += (targetY - posY) * 0.05;
    luna.style.transform = `translateY(${posY * 0.3}px)`; 
    requestAnimationFrame(animar);
  }

  window.addEventListener("scroll", () => {
    targetY = window.scrollY;
  });

  animar();


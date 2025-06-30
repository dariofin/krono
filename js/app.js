window.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  function animateLogo() {
    logo.classList.add("animated");
    // Espera a que termine la animación de entrada (1.2s) + 5s quieto
    setTimeout(function () {
      logo.classList.remove("animated");
      logo.classList.add("animated-out");
      // Espera animación de salida (1s)
      setTimeout(function () {
        logo.classList.remove("animated-out");
        // Estado inicial fuera de pantalla y opaco antes de volver a entrar
        logo.style.opacity = "0";
        logo.style.transform = "translateY(-120vh) scaleY(1.2) scaleX(0.8)";
        // Mantiene el logo fuera de pantalla 1.5s completos
        setTimeout(function () {
          // Restablece estilos y vuelve a animar
          logo.style.opacity = "";
          logo.style.transform = "";
          logo.classList.add("animated");
        }, 1500);
      }, 1000);
    }, 6200); // 1.2s + 5s = 6200ms
  }

  setTimeout(animateLogo, 100);
});

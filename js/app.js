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

// reproductor vinilo
document.addEventListener("DOMContentLoaded", function () {
  const portadaVinilo = document.getElementById("portada-vinilo");
  const audioPlayer = document.getElementById("audioPlayer");
  const controlIcon = document.getElementById("controlIcon");

  // Mostrar el ícono de play al cargar la página
  controlIcon.classList.add("play-icon");

  // Función para reproducir el audio
  function playAudio() {
    audioPlayer.play();
    controlIcon.classList.remove("play-icon");
    controlIcon.classList.add("pause-icon");
  }

  // Función para pausar el audio
  function pauseAudio() {
    audioPlayer.pause();
    controlIcon.classList.remove("pause-icon");
    controlIcon.classList.add("play-icon");
  }

  // Evento al hacer clic en el ícono
  controlIcon.addEventListener("click", function () {
    if (audioPlayer.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
});

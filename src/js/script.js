//FUNÇÃO TROCAR
  const btnModo = document.getElementById("modoBtn");

  btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Troca o texto e o ícone do botão
    if (document.body.classList.contains("dark-mode")) {
      btnModo.textContent = "☀️ Modo Light";
    } else {
      btnModo.textContent = "🌙 Modo Dark";
    }
  });


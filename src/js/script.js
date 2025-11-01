function trocar(modo) {
  // Primeiro, tirar todos os estilos
  document.body.classList.remove('dark-mode');
  document.body.classList.remove('high-contrast-mode');
  document.body.classList.remove('daltonismo');

  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
  }

  if (modo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
  }

  if (modo === 'daltonismo') {
    document.body.classList.add('daltonismo');
  }

  // Se for modo claro, não precisa adicionar nada
}

// Alternar modo escuro com checkbox

const atual = document.getElementById('modo-atual');

if (atual) {
  atual.addEventListener('change', function() {
    if (atual.checked === true) {
      trocar('escuro');
    } else {
      trocar('claro');
    }
  });
}

// --- Botão filtro daltonismo ---
const btnDaltonismo = document.getElementById('btn-daltonismo');
if (btnDaltonismo) {
  btnDaltonismo.addEventListener('click', () => {
    trocar('daltonismo');
    const ativo = document.body.classList.contains('daltonismo');
    btnDaltonismo.textContent = ativo ? '🎨 Filtro Ativo' : '🎨';
  });
}

// --- Alerta bonito ---
function alertaBonito(event) {
  event.preventDefault(); // impede recarregamento do formulário
  Swal.fire({
    title: "Mensagem enviada!",
    icon: "success",
    draggable: true
  });
}

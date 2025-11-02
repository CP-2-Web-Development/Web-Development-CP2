function trocar(modo) {
  // Remove todos os estilos anteriores
  document.body.classList.remove('dark-mode', 'high-contrast-mode');

  // Aplica o modo selecionado
  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
  } else if (modo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
  } else if (modo === 'daltonismo') {
    document.body.classList.add('daltonismo');
    atualizaTexto();
    
  }

}

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
const btnDaltonismo = document.getElementById('btn-daltonismo');
if (btnDaltonismo) {
  btnDaltonismo.addEventListener('click', () => {
    // alterna o estado manualmente
    if (document.body.classList.contains('daltonismo')) {
      document.body.classList.remove('daltonismo');
      btnDaltonismo.textContent = '🎨 Filtro Desativado';
    } else {
      document.body.classList.add('daltonismo');
      btnDaltonismo.textContent = '🎨 Filtro Ativo';
    }
  });
}
// --- Alerta bonito ---
function alertaBonito(event) {
  event.preventDefault(); // impede recarregamento do formulário
  Swal.fire({
    title: "Sua ação foi concluída com sucesso!",
    icon: "success",
    draggable: true //deixa o mouse arrastável ou n
  });
}

//FUNÇÃO TROCAR
function trocar(modo) {
  // Remove todas as classes antes de adicionar a nova
  document.body.classList.remove('dark-mode', 'high-contrast-mode');

  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
    localStorage.setItem('modo', 'escuro');
  } else if (modo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
    localStorage.setItem('modo', 'contraste');
  } else {
    localStorage.setItem('modo', 'claro');
  }
}

window.onload = function () {
  const temaSalvo = localStorage.getItem('modo');
  if (temaSalvo === 'escuro') {
    document.body.classList.add('dark-mode');
  } else if (temaSalvo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
  }
};


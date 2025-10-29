//FUNÇÃO TROCAR
function trocar(modo) {
  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
    localStorage.setItem('modo', 'escuro');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('modo', 'claro');
  }
}

window.onload = function () {
  const temaSalvo = localStorage.getItem('modo');
  if (temaSalvo === 'escuro') {
    document.body.classList.add('dark-mode');
  }
};


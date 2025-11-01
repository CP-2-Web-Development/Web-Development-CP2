function trocar(modo) {

  document.body.classList.remove('dark-mode', 'high-contrast-mode');

  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
  } else if (modo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
  }
}

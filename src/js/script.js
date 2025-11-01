function trocar(modo) {

  document.body.classList.remove('dark-mode', 'high-contrast-mode');

  if (modo === 'escuro') {
    document.body.classList.add('dark-mode');
  } else if (modo === 'contraste') {
    document.body.classList.add('high-contrast-mode');
  }
}

// recebemos o evento 
//documentacao do Swal-> https://stackoverflow.com/questions/67760745/swal-fire-when-click-text-in-javascript-sweetalert
function alertaBonito(event){
  event.preventDefault();// previnindo que a página recerregue
Swal.fire({// swal.fire exibe uma mensagem na tela, 
  title: "mensagem enviada!", 
  icon: "success",//aqui estamos carregando o icone de sucesso, o certinho que aparece
  draggable: true
});

}
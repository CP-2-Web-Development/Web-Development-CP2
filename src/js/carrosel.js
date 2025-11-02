
let imagens = [
  "src/assets/inicio/python_inicio.png",
  "src/assets/inicio/java_inicio.jpg",
  "src/assets/inicio/ruby_inicio.png",
  "src/assets/inicio/csharp_inicio.png",
  "src/assets/inicio/javascript_inicio.png",
  "src/assets/inicio/php_inicio.png",
];

let links = [
  "./src/pages/paginasPy/py.html",
  "./src/pages/paginasjava/java.html",
  "./src/pages/paginasRuby/quizRuby.html",
  "./src/pages/csharp/csharp.html",
  "./src/pages/paginasjs/quizJs.html",
  "./src/pages/paginasPhp/php.html",
];

let i = 0;
let tempo = 3000; 

function slideShow() {
  
  const imagem = document.getElementById("image");
  const link = document.getElementById("linkImagem");

  
  imagem.src = imagens[i];
  link.href = links[i];

  
  i++;
  if (i === imagens.length) {
    i = 0;
  }

  
  setTimeout(slideShow, tempo);
}


slideShow();

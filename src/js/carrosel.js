//FUNÇÃO SLIDESHOW

// DECLARANDO UM ARRAY DE IMAGENS

let imagens=[
    "src/assets/inicio/logo.png",
    "src/assets/inicio/python_inicio.png",
    "src/assets/inicio/java_inicio.jpg",
    "src/assets/inicio/ruby_inicio.png",
    "src/assets/inicio/csharp_inicio.png",
    "src/assets/inicio/javascript_inicio.png",
    "src/assets/inicio/php_inicio.png",
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =5000; // milisegundos

//função 

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();
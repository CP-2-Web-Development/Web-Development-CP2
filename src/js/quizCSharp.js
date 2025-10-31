 var form = document.getElementById('quiz-form');
    var htmlOriginal = form.innerHTML;
    var certas = 0;

    function verificarRespostas() {
      certas = 0;

      // checked serve pra capturar o input selecionado
      var r1 = document.querySelector('input[name="q1"]:checked');
      var r2 = document.querySelector('input[name="q2"]:checked');
      var r3 = document.querySelector('input[name="q3"]:checked');
      var r4 = document.querySelector('input[name="q4"]:checked');
      var r5 = document.querySelector('input[name="q5"]:checked');

      if (r1 && r1.value == "b") certas++;
      if (r2 && r2.value == "a") certas++;
      if (r3 && r3.value == "b") certas++;
      if (r4 && r4.value == "c") certas++;
      if (r5 && r5.value == "a") certas++;

      form.innerHTML = "<h2>Você acertou " + certas + " de 5 perguntas!</h2>";
      
    }

    function resetarQuiz() {
      form.innerHTML = htmlOriginal;
      certas = 0;
    }
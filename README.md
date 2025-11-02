# 💻 Web-Development-CP2 — **Code On**

**Code On** é uma plataforma educacional voltada ao ensino de **linguagens de programação e tecnologias emergentes**, desenvolvida com **HTML, CSS e JavaScript**.  
O projeto tem como objetivo exercitar a criação de páginas interativas, organização modular de conteúdo e navegação entre múltiplas seções temáticas.

---

## 📂 Estrutura de Pastas

```plaintext
.
├── src/
│   ├── assets/
│   │   ├── inicio/
│   │   └── market_place/
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── carrossel.css
│   │   ├── market_place.css
│   │   ├── portfolio.css
│   │   ├── sobre.css
│   │   ├── cursos.css
│   │   ├── perguntas.css
│   │   └── compras.css
│   │
│   ├── js/
│   │   ├── script.js
│   │   ├── carrossel.js
│   │   ├── quizJs.js
│   │   ├── quizJava.js
│   │   ├── quizPy.js
│   │   ├── quizPhp.js
│   │   ├── quizRuby.js
│   │   └── quizCsharp.js
│   │
│   └── pages/
│       ├── csharp/
│       │   ├── csharp.html
│       │   └── perguntasCsharp.html
│       ├── java/
│       │   ├── java.html
│       │   └── perguntasJava.html
│       ├── js/
│       │   ├── js.html
│       │   └── perguntasJs.html
│       ├── php/
│       │   ├── php.html
│       │   └── perguntasPhp.html
│       ├── python/
│       │   ├── python.html
│       │   └── perguntasPy.html
│       ├── ruby/
│       │   ├── ruby.html
│       │   └── perguntasRuby.html
│       ├── sobre.html
│       ├── portfolio.html
│       ├── market_place.html
│       ├── quiz.html
│       ├── contato.html
│       └── compra.html
│
└── index.html
```

---

## ⚙️ Funcionalidades

### 🏠 Página Inicial (`index.html`)
- Carrossel dinâmico com imagens das linguagens de programação.  
- Navegação rápida entre cursos, quizzes e seções principais.  
- Menu fixo com alternância entre **modo claro, escuro e contraste** (acessibilidade).

### 🛒 Marketplace (`market_place.html`)
- Exibe os cursos disponíveis (Python, JavaScript, PHP, Ruby, C#, Java).  
- Cada card leva à página da linguagem correspondente.  
- Efeitos de *hover* e *scale* para interatividade moderna.

### 📚 Páginas de Curso
- Explicação sobre a linguagem e seu papel no mercado.  
- Lista de tópicos abordados no curso.  
- Botões para **quiz interativo** e **compra do curso**.

### 🧠 Quiz Interativo
- Cada linguagem possui seu próprio quiz com pontuação.  
- Feedback instantâneo de acertos e erros.  
- Implementado totalmente em **JavaScript**.

### 💳 Página de Compra (`compra.html`)
- Simulação de checkout com formulário.  
- Campos de nome, email e forma de pagamento.  
- Confirmação visual e redirecionamento.

### 💼 Portfólio (`portfolio.html`)
- Exibe os projetos desenvolvidos pela equipe.  
- Destaque para o **projeto Vinheria Agnello** — e-commerce de vinhos com design e estrutura criados pela Code On.

### 👥 Sobre Nós (`sobre.html`)
- Missão e propósito da plataforma.  
- Apresentação dos integrantes da equipe e suas funções.

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e responsividade |
| **JavaScript** | Interatividade e lógica dos quizzes |
| **VS Code** | Ambiente de desenvolvimento |

---

## 🎨 Identidade Visual

- **Paleta de Cores:** tons de azul-escuro e verde neon (tecnologia e modernidade).  
- **Tipografia:** fonte “Poppins”, sem serifa, legível e fluida.  
- **Botões:** efeitos de *hover* e transição suave.  
- **Acessibilidade:** suporte completo para **modo claro**, **escuro** e **alto contraste**.

---

## 🧭 Formulários e Navegação

- Campos e botões padronizados com foco visível.  
- Feedback visual em interações.  
- Navegação fluida entre páginas e seções.

---

## 👨‍💻 Integrantes

- **Cesár André Zanin Filho** — RM: 567615  
- **Felipe Silva Santos Menezes** — RM: 566607  
- **Vinicius Kozonoe Guaglini** — RM: 567264  

---

## 🚀 Como Executar Localmente

```bash
git clone https://github.com/seuusuario/code-on.git
cd code-on
```

Em seguida, abra o arquivo `index.html` diretamente no navegador  
ou utilize o **Live Server** (porta 5051) no VS Code:

```bash
npx live-server --port=5051
```

---

## 📄 Licença

<<<<<<< HEAD
**Code On** 
Plataforma educacional voltada ao ensino de linguagens de programação e tecnologias emergentes.  
Desenvolvida em **HTML, CSS e JavaScript**, com o objetivo de treinar a criação de páginas interativas, organização modular de conteúdo e navegação entre múltiplas seções temáticas.

---

📂 **Estrutura de Pastas**

.
├── src
│ ├── assets/
│ │ ├── inicio/ 
│ │ └── market_place/ 
│ │
│ ├── css/
│ │ ├── style.css 
│ │ ├── carrossel.css 
│ │ ├── market_place.css 
│ │ ├── portfolio.css 
│ │ ├── sobre.css 
│ │ ├── cursos.css 
│ │ ├── perguntas.css 
│ │ └── compras.css 
│ │
│ ├── js/
│ │ ├── script.js 
│ │ ├── carrossel.js 
│ │ ├── quizJs.js 
│ │ ├── quizJava.js 
│ │ ├── quizPy.js 
│ │ ├── quizPhp.js 
│ │ ├── quizRuby.js 
│ │ └── quizCsharp.js 
│ │
│ └── pages/
│ ├── csharp/
│ │ ├── csharp.html
│ │ └── perguntasCsharp.html
│ ├── java/
│ │ ├── java.html
│ │ └── perguntasJava.html
│ ├── js/
│ │ ├── js.html
│ │ └── perguntasJs.html
│ ├── php/
│ │ ├── php.html
│ │ └── perguntasPhp.html
│ ├── python/
│ │ ├── python.html
│ │ └── perguntasPy.html
│ ├── ruby/
│ │ ├── ruby.html
│ │ └── perguntasRuby.html
│ ├── sobre.html
│ ├── portfolio.html
│ ├── market_place.html
│ ├── quiz.html
│ ├── contato.html
│ └── compra.html
│
└── index.html 

yaml
Copiar código

---
 **Funcionalidades**

###  Página Inicial (`index.html`)
- Carrossel dinâmico com imagens das linguagens de programação.  
- Navegação rápida entre cursos, quiz e seções principais.  
- Menu fixo com alternância entre **modo claro, escuro e contraste** para acessibilidade.

###  Marketplace (`market_place.html`)
- Apresenta os cursos disponíveis (Python, JavaScript, PHP, Ruby, C#, Java).  
- Cada card redireciona para a página da respectiva linguagem.  
- Efeitos de *hover* e *scale* nos ícones, criando uma interação moderna.

###  Cursos
- Explicação sobre a linguagem e seu uso no mercado.  
- Seção sobre o que o aluno vai aprender no curso.  
- Botões de **quiz interativo** e **compra do curso**.

###  Quiz Interativo
- Cada linguagem possui seu próprio quiz com perguntas e pontuação.  
- Feedback instantâneo de acertos e erros.  
- Implementado totalmente em **JavaScript**.

###  Página de Compra (`compra.html`)
- Simulação de checkout simples e direto.  
- Formulário com campos de nome, email e forma de pagamento.  
- Botão de confirmação e redirecionamento.

###  Portfólio (`portfolio.html`)
- Mostra os projetos já realizados pela Code On.  
- Destaque para o **projeto desenvolvido com a Vinharia Agnello**, onde o time auxiliou no design e estrutura web de um e-commerce de vinhos.

###  Sobre Nós (`sobre.html`)
- Explica a missão da Code On e o propósito de democratizar o aprendizado de tecnologia.  
- Apresenta os integrantes da equipe e seus papéis no projeto.

---

 **Tecnologias Utilizadas**

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura das páginas |
| **CSS** | Estilização e responsividade |
| **JavaScript** | Interatividade e controle de quizzes |
| **VS Code** | Ambiente de desenvolvimento |

---

 **Identidade Visual**

- **Paleta de Cores:** tons de azul-escuro e verde neon, transmitindo tecnologia e modernidade.  
- **Tipografia:** fontes sem serifa com bom contraste e legibilidade.  
- **Botões interativos:** efeitos de transição e *hover* em links e ícones.  
- **Acessibilidade:** suporte para modo claro, escuro e alto contraste.

---

 **Formulários e Navegação**

- Formulários padronizados com bordas suaves e foco visível.  
- Feedback visual em interações de botões e campos de texto.  
- Navegação entre páginas fluida e coerente, mantendo a identidade do site.

---

**Integrantes**
- Cesár André Zanin Filho Rm:567615
- Felipe Silva Santos Menezes Rm:566607
- Vinicius Kozonoe Guaglini Rm:567264

---

 **Como Executar Localmente**

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/code-on.git

---

**📄 Licença**
Este projeto é licenciado sob os termos da [MIT License](./LICENSE).
=======
Este projeto está licenciado sob os termos da [MIT License](./LICENSE).
>>>>>>> 83163273184041149194edb84008c0f68b7c01e2

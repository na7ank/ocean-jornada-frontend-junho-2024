
# Sobre Vite-React<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" height="40"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" height="40"/>
          
          
Vite é uma ferramenta de build e desenvolvimento que pode ser usada com React (ou outras tecnologias de front-end, como Vue, Svelte, etc.). Ele não substitui o React, mas sim facilita o processo de desenvolvimento e construção de projetos que utilizam o React.

### 1. **O que é React?**
   - **React** é uma biblioteca JavaScript para criar interfaces de usuário. Ele foca na construção de componentes reutilizáveis que podem ser renderizados no navegador ou em outras plataformas (como mobile, com React Native).
   - **React** cuida da lógica de renderização, do estado da interface, e da gestão de eventos.

### 2. **O que é Vite?**
   - **Vite** é uma **ferramenta de desenvolvimento** que ajuda a construir e servir aplicativos web de maneira rápida e eficiente.
   - Ele cuida de coisas como empacotar (bundling) arquivos, servir o código no navegador durante o desenvolvimento, e criar a versão otimizada do seu projeto para produção.
   - Vite é **independente de framework**, o que significa que ele pode ser usado com React, Vue, Svelte, ou até projetos JavaScript puro.

### 3. **Como Vite e React Trabalham Juntos?**
   - Você pode criar um projeto React usando o Vite como a ferramenta de build. Nesse caso, o Vite configura o ambiente de desenvolvimento para React (incluindo suporte para JSX, HMR, etc.) e oferece uma experiência rápida e fluida ao escrever código React.
   - **React** continua sendo a biblioteca que você usa para construir a interface de usuário, enquanto **Vite** cuida de toda a parte de compilação e otimização.

### 4. **Diferença entre Frameworks e Ferramentas de Build:**
   - Um **framework** (como Next.js ou Gatsby) é uma estrutura de desenvolvimento que inclui padrões e ferramentas específicas para criar aplicações com React. Ele pode fornecer funcionalidades adicionais como roteamento, geração de páginas estáticas, etc.
   - Uma **ferramenta de build** (como Vite, Webpack, Parcel) é responsável por gerenciar e otimizar o código-fonte, lidando com tarefas como a conversão de módulos ES6, minificação de código, etc. Ferramentas de build são mais focadas na infraestrutura do projeto e menos nas regras de como construir a aplicação em si.

### Resumindo:
- **Vite** é uma ferramenta para desenvolvimento e build, não um framework.
- **React** é a biblioteca que você usa para criar a interface de usuário.
- Você pode usar **Vite** para otimizar e melhorar o fluxo de trabalho de desenvolvimento ao trabalhar com **React**.

Espero que isso esclareça!
# Visão geral do passo a passo

### Comandos iniciais no Terminal

> ``npm create vite@latest``

- vite
- javascript

> ``npm install``

> ``npm run dev``

### Formatar ``App.jsx``
```javascript
import './App.css'

function App() {

  return (
    <>
      App
    </>
  )
}

export default App
```
### Deletar tudo do ``App.css`` e ``index.css``

### Criar uma estrutura básica
```javascript
import './App.css'

function App() {

  return (
    <>
      <div class="card">
        <h2>Título</h2>
        <img src="https://portalcontabilsc.com.br/wp-content/uploads/2020/05/g15.jpg"/>
      </div>
    </>
  )
}

export default App
```
### Formatar o ``index.html``
```html
<!doctype html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>

</html>
```
### Estilizações básicas
```css
.card{
    border: 1px solid rgb(80, 80, 80);
    padding: 16px;
    border-radius: 16px;
    width: 330px;
    text-align: center;
    background-color: rgb(226, 226, 226);
    transition: all 0.15s;
}

.card:hover {
    box-shadow: 3px 3px rgb(129, 129, 129);
    translate: -3px -3px;
}
.car h2{
    font-size: 32px;
    font-family: sans-serif;
}

.card img {
    width: 100%;
    border-radius: 16px;
}
```
### Deploy no Render
https://render.com/
Apenas em Publish directory: dist

> ``npm i react-router-dom``

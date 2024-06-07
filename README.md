# Visão geral do passo a passo

### Comandos iniciais no Terminal

> npm create vite@latest

> npm install

> npm run dev

### Formatar ***App.jsx***
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
### Deletar tudo do ***App.css*** e ***index.css***

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
### Formatar o ***index.html***
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
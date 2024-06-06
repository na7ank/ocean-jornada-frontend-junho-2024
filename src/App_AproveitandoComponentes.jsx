// App.js
import './App.css'
import Card from './Card';

function App() {
  const cardsData = [
    { title: "Título 1", imageUrl: "https://portalcontabilsc.com.br/wp-content/uploads/2020/05/g15.jpg" },
    { title: "Título 2", imageUrl: "https://portalcontabilsc.com.br/wp-content/uploads/2020/05/g15.jpg" },
    { title: "Título 3", imageUrl: "https://portalcontabilsc.com.br/wp-content/uploads/2020/05/g15.jpg" },
    // Adicione mais objetos conforme necessário
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </>
  );
}

export default App;

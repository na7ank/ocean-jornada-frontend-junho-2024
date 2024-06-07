// App.js
import './App.css'
import Card from './Card';

function App() {
  const cardsData = [
    { title: "Título 1", imageUrl: "https://doc.arcgis.com/en/insights/latest/create/GUID-5C7AAF44-C609-472D-9193-0E9B23C6B68F-web.png" },
    { title: "Título 2", imageUrl: "https://doc.arcgis.com/en/insights/latest/create/GUID-5C7AAF44-C609-472D-9193-0E9B23C6B68F-web.png" },
    { title: "Título 3", imageUrl: "https://doc.arcgis.com/en/insights/latest/create/GUID-5C7AAF44-C609-472D-9193-0E9B23C6B68F-web.png" },
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

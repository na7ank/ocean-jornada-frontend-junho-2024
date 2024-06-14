import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';



function Home() {
  const [itens, setItens] = useState([]);

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(apiUrl); //retorna promise usa await
    const body = await response.json(); // retorna promise usa await
    const results = body.results;
    setItens(results);
  }
  
  useEffect(function(){
    carregarDados();
  }, [])


  return (
    <>
      <div className="cards">
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
  )
}
export default Home

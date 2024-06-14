import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewItemById() {
  const [item, setItem] = useState();
  const { itemId } = useParams()
  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/' + itemId;
    const response = await fetch(apiUrl); //retorna promise usa await
    const body = await response.json(); // retorna promise usa await
    setItem(body);
  }

  useEffect(function () {
    carregarDados();
  }, [])

  if (!item) {
    return <div>Carregando ...</div>
  }
  return (
    <>
      <h1>{item.name}</h1>
    </>
  )
}
export default ViewItemById
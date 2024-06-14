import { Link } from "react-router-dom"

export default function Card(props) {
  const item = props.item

  return (
    <Link to={`/item/${item.id}`}>
      <div className="card">
        <h2>{item.name}</h2>
        <img src={item.image} />
        <div className="tags">
          <div>Status: {item.status}</div>
          <div>Espécie: {item.species}</div>
          <div>Origem: {item.origin.name}</div>
        </div>
      </div>
    </Link>

  )
}
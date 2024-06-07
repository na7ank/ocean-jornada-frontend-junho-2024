export default function Card(props){
    const item = props.item;
    return (
        <div className="card">
            <h2>{item.title}</h2>
            <img src={item.image}/>
            <div className="tags">
                <div>Status: {item.status}</div>
                <div>Specie: {item.specie}</div>
                <div>Origin: {item.origin}</div>
            </div>
        </div>
    )
}
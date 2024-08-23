export default function Property({name, rating, price}) { 

    return (
    <div>
        <h1>Property Name:{name}</h1>
        <h2>Rating: {rating}</h2>
        <h3>Price: ${price}</h3>

    </div>
    )
}
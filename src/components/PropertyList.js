import Property from './Property'; 


export default function PropertyList({properties}) { 
    return (
        <div>
            {properties.map((property) => (
                <Property key={property.id} name={property.name} rating={property.rating} price={property.price} />
            ))}
            
        </div>

    )
    
}
import Property from './Property'; 

interface PropertyItem {
    id: number;
    name: string;
    rating: number;
    price: number;
  }

  interface PropertyListProps { 
    properties: PropertyItem[]; 
  }


export default function PropertyList({properties}: PropertyListProps): JSX.Element { 
    return (
        <div>
            {properties.map((property) => (
                <Property key={property.id} name={property.name} rating={property.rating} price={property.price} />
            ))}
            
        </div>

    )
    
}
interface GreetingProps { 
    name: string; 
    age?: number; 
}

const PropsExample: React.FC<GreetingProps> = ({name, age}) => { 
    return ( 
        <div>
            <h1>Hello, {name}</h1>
            {age && <p>You are {age} years old.</p>}
        </div>
    )
}

export default PropsExample; 
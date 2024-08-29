import React from 'react'; 


// Define the interface for the person object 
interface Person { 
    firstName: string; 
    lastName: string; 
}

// Define the Props interface
interface GreeterProps { 
    person: Person
}

export default function Greeter(props: GreeterProps): JSX.Element { 
    const { firstName, lastName } = props.person
    
    return ( 
        <>
        <h1>
            Hi {firstName} {lastName}!
        </h1>
        </>
    
    )
}

// Define props types for Header Component

interface HeaderProps { 
    text: string; 
}


export default function Header({text}: HeaderProps): JSX.Element { 
    return <h1>{text}</h1>
}
import {useState, ChangeEvent, FormEvent} from 'react'; 
// ChangeEvent and FormEvent are TS types for handling events in react 
// changeEvent for input fields 
// FormEvent for submissions 

export default function Form(): JSX.Element { 
    // return type of JSX

    const [lastName, setLastName] = useState<string>('');
    // <string> sets type of state to string 
    const [firstName, setFirstName] = useState<string>(''); 
    const [city, setCity] = useState<string>(''); 

    function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>): void { 
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e: ChangeEvent<HTMLInputElement>): void { 
        setLastName(e.target.value)
    }

    function handleCityChange(e: ChangeEvent<HTMLInputElement>): void { 
        setCity(e.target.value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void { 
        e.preventDefault(); 
        console.log({firstName, lastName, city})
    }
    
    return ( 
    <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} onChange={handleFirstNameChange}/>
        <input type='text' value={lastName} onChange={handleLastNameChange}/>
        <input type='text' value={city} onChange={handleCityChange}/>
        <button type='submit'>Submit</button>
    </form>
    )
}
import {useState} from 'react'; 

export default function Form() { 

    const [lastName, setLastName] = useState(""); 
    const [firstName, setFirstName] = useState(""); 
    const [city, setCity] = useState(""); 

    function handleFirstNameChange(e) { 
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) { 
        setLastName(e.target.value)
    }

    function handleCityChange(e) { 
        setCity(e.target.value)
    }
    
    return ( 
    <form>
        <input type='text' value={firstName} onChange={handleFirstNameChange}/>
        <input type='text' value={lastName} onChange={handleLastNameChange}/>
        <input type='text' value={city} onChange={handleCityChange}/>
        <button type='submit'>Submit</button>
    </form>
    )
}
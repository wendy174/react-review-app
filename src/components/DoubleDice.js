export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1; 
    const num2 = Math.floor(Math.random() * 3) + 1; 

    return ( 
        <>
            <h2>DoubleDice</h2>
            {num1 === num2 && <h3> You win!  </h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </>
    )

}
export default function DoubleDice(): JSX.Element{
    const num1: number = Math.floor(Math.random() * 3) + 1; 
    const num2: number = Math.floor(Math.random() * 3) + 1; 
    const isWinner: boolean = num1 === num2; 
    const styles = { color: isWinner ? "green" : "red" }
    // green if win 
    // red if lose
    return ( 
        <div className="DoubleDice" style={styles}>
            <h2>DoubleDice</h2>
            {num1 === num2 && <h3> You win!  </h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )

}
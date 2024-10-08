interface InfoFlowProps { 
  onSelectedItem: (item: string) => void; 
}


export default function InfoFlow({onSelectedItem}: InfoFlowProps): JSX.Element { 
    // parent to child --> props 
    // child to parent --> create callback function in parent and send to child components thru props 
    const items: string[] = ["Apple", "Banana", "Orange"];

    return (
        <div>
          <h2>Select an Item From Child Component:</h2>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <button onClick={() => onSelectedItem(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      );
}
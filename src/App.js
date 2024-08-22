import './App.css';
import './components/Chicken'
import './components/Greeter'
import Chicken from './components/Chicken';
import Greeter from './components/Greeter';
import DoubleDice from './components/DoubleDice';
import Header from './components/Header';
import Slots from './components/Slots'
import InfoFlow from './components/InfoFlow'
import React, {useState} from 'react'; 



function App() {

  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(item) { 
    setSelectedItem(item)
  }
  

  return (
    <div className="App">
      <Slots val1="⛩️" val2="⛩️" val3="⛩️"/>
      <Slots val1="⛩️" val2="⛩️" val3="👺"/>
      <h1>Selected Item from parent: {selectedItem ? selectedItem : "None"}</h1>
      <InfoFlow onSelectedItem={handleSelectedItem}/> 
      {/* <Header text="Welcome!"/>
      <Header color="blue" text="Win or Die!"/>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}
    </div>
  );
}

export default App;

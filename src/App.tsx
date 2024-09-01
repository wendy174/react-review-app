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
import PropertyList from "./components/PropertyList"; 
import Form from "./components/Form"; 
import {useEffect} from 'react'; 


function App(): JSX.Element {

  // const [selectedItem, setSelectedItem] = useState(null);

  // function handleSelectedItem(item) { 
  //   setSelectedItem(item)
  // }

  //Define interface for person object 
 

  const person: Person = {
    firstName: 'Tim',
    lastName: 'Doe'
  }

  // const properties = [
  //   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  //   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  //   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  //   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  //   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  //   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  // ];

  return (
    <div className="App">
      {/* <Form />
      <PropertyList properties={properties}/> */}
      {/* <Slots val1="⛩️" val2="⛩️" val3="⛩️"/> */}
      {/* <Slots val1="⛩️" val2="⛩️" val3="👺"/> */}
      {/* <h1>Selected Item from parent: {selectedItem ? selectedItem : "None"}</h1> */}
      {/* <InfoFlow onSelectedItem={handleSelectedItem}/>  */}
      {/* <Header text="Welcome!"/>
      <Header color="blue" text="Win or Die!"/>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}
      <Header text="hello world"/>
      <Form />
      <Greeter person={person}/>
      <Chicken />
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> 
    </div>
  );
}

export default App;

import './App.css';
import './components/Chicken'
import './components/Greeter'
import Chicken from './components/Chicken';
import Greeter from './components/Greeter';
import DoubleDice from './components/DoubleDice';
import Header from './components/Header';
import Slots from './components/Slots'



function App() {
  return (
    <div className="App">
      <Slots val1="⛩️" val2="⛩️" val3="⛩️"/>
      <Slots val1="⛩️" val2="⛩️" val3="👺"/>
      {/* <Header text="Welcome!"/>
      <Header color="blue" text="Win or Die!"/>

      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}
    </div>
  );
}

export default App;

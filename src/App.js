import './App.css';
import './components/Chicken'
import './components/Greeter'
import Chicken from './components/Chicken';
import Greeter from './components/Greeter';
import DoubleDice from './components/DoubleDice';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header text="Welcome!"/>
      <Header color="blue" text="Win or Die!"/>

      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>
    </div>
  );
}

export default App;

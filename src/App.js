import './App.css';
import './components/Chicken'
import Chicken from './components/Chicken';
import DoubleDice from './components/DoubleDice';


function App() {
  return (
    <div className="App">
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>
    </div>
  );
}

export default App;

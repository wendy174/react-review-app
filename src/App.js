import './App.css';
import './components/Chicken'
import './components/Greeter'
import Chicken from './components/Chicken';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Chicken/>
      <Greeter person="Wendy"/>
      <Greeter person="Cindy"/>
      <Greeter person="Anthony"/>


    </div>
  );
}

export default App;

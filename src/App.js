import Greeting from './components/pure/greeting';
import './App.css';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      {/* Componente propio Greeting - de clase */}
      <Greeting name={"Eugenia"}></Greeting> 
      {/* Componente propio GreetingF - funcional */}
      <GreetingF name="Euge" />
    </div>
  );
}

export default App;

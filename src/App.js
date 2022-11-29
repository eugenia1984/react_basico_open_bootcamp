import Greeting from './components/pure/greeting';
import './App.css';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from "./components/container/task_list.jsx";

function App() {
  return (
    <div className="App">
      {/* Componente propio Greeting - de clase */}
      <Greeting name={"Eugenia"}></Greeting> 
      {/* Componente propio GreetingF - funcional */}
      <GreetingF name="Euge" />
      {/* Componente de listado de tareas */}
      <TaskListComponent />
    </div>
  );
}

export default App;

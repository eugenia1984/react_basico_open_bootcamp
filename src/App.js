import Greeting from './components/pure/greeting';
import './App.css';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from "./components/container/task_list.jsx";
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/* Componente propio Greeting - de clase */}
      {/*<Greeting name={"Eugenia"}></Greeting>*/} 
      {/* Componente propio GreetingF - funcional */}
      {/*<GreetingF name="Euge" />*/}
      {/* Componente de listado de tareas */}
      <TaskListComponent />
      {/* Ejemplo de uso de hooks - useState */}
      {/*<Ejemplo1 />*/}
      {/* Ejemplo de uso de hooks - useState y useEffect */}
      {/* <Ejemplo2 /> */}
      {/* useState() y useContext() */}
      <Ejemplo3 />
      {/* Ejemplo para entender props.children */}
      <Ejemplo4 nombre="Euge">
        {/* Todo lo que hay adentro es tratado como props.children*/}
        <h3>Contenido del props.children</h3>
      </Ejemplo4>
    </div>
  );
}

export default App;

import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

//esto no es HTML, es jsx
//la "funcion" con mayusc es en realidad un componente
//el componente tiene elementos adentro
//el componente recibe propiedades
//TodoItem es un componente adentro de otro componente(App)

function App() {
  return (
    <div className="App">
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </TodoList>

        <CreateTodoButton/>

    </div>
  );
}



export default App;

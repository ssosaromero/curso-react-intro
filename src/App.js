import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


const defaultTodos = [
{ text: 'Cortar cebolla', completed: true},
{ text: 'Tomar curso react', completed: false},
{ text: 'Lavar los platos', completed: false},
{ text: 'Ver Spiderman', completed: false},
];

function App() {
  return (
    <>
        <TodoCounter completed={16} total={25}/>
        <TodoSearch/>

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              />
          ))}
        </TodoList>

        <CreateTodoButton/>

    </>
  );
}



export default App;

//esto no es HTML, es jsx
//la "funcion" con mayusc es en realidad un componente
//el componente tiene elementos adentro
//el componente recibe propiedades
//TodoItem es un componente adentro de otro componente(App)
//todo lo que este entra la etqueta de apertura y la de cierre React lo transforma en un(a propiedad) children
//de entrada el return debe envolver UN elemento: 1)puede ser un div 2)puede ser el React.Fragment 3)puede ser un array

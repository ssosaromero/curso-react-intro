import logo from './platzi.webp';
import './App.css';

//esto no es HTML, es jsx
//la "funcion" con mayusc es en realidad un componente
//el componente tiene elementos adentro
//el componente recibe propiedades
//TodoItem es un componente adentro de otro componente(App)

function App() {
  return (
    <div className="App">

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

  function TodoItem() {
    return(
      <li>
        <span>V</span>
        <p>Llorar con la Llorona</p>
        <span>X</span>
      </li>
    );

  }

export default App;

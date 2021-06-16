import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function HolaMundo(nombre) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}.</h2>
    </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Erika Munini";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo(nombre)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

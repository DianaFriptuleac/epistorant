import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css' //devo includere in app.js il file css di bootstrap presente in node_modules
//bootstrap.min.css- css di bootstrap piu leggero e compatto.
import './App.css'; //il mio css e meglio importarlo dopo bootstrap

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-success border border-danger'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

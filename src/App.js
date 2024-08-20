import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css' //devo includere in app.js il file css di bootstrap presente in node_modules
//bootstrap.min.css- css di bootstrap piu leggero e compatto.
import './App.css'; //il mio css e meglio importarlo dopo bootstrap
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    //al posto del div posso mettere anche un fragment
    <div>
    <header>
   <CustomNavbar/>
    </header>
    <main>
    <h1 className='text-center mt-5'>
    Epistorante
    </h1>
    </main>
    </div>
  );
}

export default App;

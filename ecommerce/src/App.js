import NavBar from './components/NavBar'
import 'bulma/css/bulma.min.css'
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Cafe Buenos Aires</h1>
      <ItemListContainer greeting='Hola! Bienvenido a nuestra tienda en linea, ¿Que quieres pedir hoy?' />


    </div>
  );
}

export default App;

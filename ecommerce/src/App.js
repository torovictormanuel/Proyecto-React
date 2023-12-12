
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React, {  useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bulma/css/bulma.min.css'
import Rendered from './rendered';
import './components/styles/rendered.css'
import Productos from './components/dataCafeteria/dataCafeteria';
import Home from './home';



function App() {

 const [img,setImg]= useState([])

 const  handleBusqueda =  (valor)=>{
  const respuesta = Productos.filter((producto)=>
  producto.nombre.toLowerCase().includes(valor.toLowerCase()) || producto.tipo.toLowerCase().includes(valor.toLowerCase())
  );
  setImg(respuesta)
}

  return (
    <div className="App">
      <BrowserRouter> 
            <NavBar onSearch={handleBusqueda}  />
        <Routes>
           <Route path ='inicio' element={<Home/>}/>

           <Route path='productos' element={ <div className='images'> 
            <Rendered productos={img.length > 0 ? img : Productos} /> </div>} />

           <Route path ='*' element={<Home/>}/>
          </Routes> 
      </BrowserRouter>
     </div>
  );
}

export default App;

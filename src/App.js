import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, guradarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda; 

  useEffect(()=>{
    const consultarApi = async() => {
      if(consultar){
        const miapikey = "bdf8f1193322efd95ab593b7faef3b7d";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${miapikey}`;
      
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        console.log(resultado);
      }
    }
    consultarApi();
  }, [consultar]);

  return (
    <Fragment>
    <Header
      titulo="El Tiempo con React"
    />

    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <Formulario 
              busqueda={busqueda}
              guradarBusqueda={guradarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </div>
          <div className="col m6 s12">
          2
          </div>
        </div>
      </div>
    </div>
    
    </Fragment>
  );
}

export default App;

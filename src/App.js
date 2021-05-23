import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, guradarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);


  const {ciudad, pais} = busqueda; 

  useEffect(()=>{
    const consultarApi = async() => {
      if(consultar){
        const miapikey = "bdf8f1193322efd95ab593b7faef3b7d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${miapikey}`;
      
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        setResultado(resultado);
        guardarConsultar(false);

        //Detectar que exista la ciudad
        if(resultado.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    }

    consultarApi();
  }, [consultar]);

  let  componente;
  if(error){
    componente = <Error mensaje="No existe la ciudad que has introducido" />
  }else{
    componente = <Clima resultado={resultado} />
  }

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
            {componente}
          </div>
        </div>
      </div>
    </div>
    
    </Fragment>
  );
}

export default App;

import React from 'react';

const Clima = ({resultado}) => {

    //Extraemos los valores para siplificar (con destructuring)
    const {main, name} = resultado;

    //Si no vienen datos no eh¡jecutamos el componente
    if(!name){ return null}

    const kelvin = 273.15;
    return ( 
    
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura máxima:
                {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura mínima:
                {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
export default Clima;
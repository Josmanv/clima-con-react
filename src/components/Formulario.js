import React, {useState} from 'react';
import Error from './../components/Error';

const Formulario = ({busqueda, guradarBusqueda, guardarConsultar}) => {

    //state del formulario
    // const [busqueda, guradarBusqueda] = useState({
    //     ciudad: "",
    //     pais: ""
    // });

    const [error, guardarError] = useState(false);

    //destructuración de la constante busqueda
    const {ciudad, pais} = busqueda; 

    //Función que coloca los elementos en el state
    const handleChange = e => {
        //Actualizar el state
        guradarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    };

    //Al enviar el form
    const handleSubmit = e =>{
        e.preventDefault();

        //Validar
        if(ciudad.trim() === "" | pais.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Pasarlo al componete principal
        guardarConsultar(true);
    };

    return ( 
       <form onSubmit={handleSubmit}>
       {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
        <div className="input-field col s12">
            <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad:</label>
        </div>

        <div className="input-field col s12">
            <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
            >
                <option value="">-- Selecciona un país --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="CL">Chile</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="pais">País:</label>
        </div>
        <div className="input-field col s12">
            <input
                type="submit"
                value="Buscar Clima"
                className="waves-effect waves-light btn-large btn-block #ffd740 amber accent-2"
            />
        </div>
       </form>
     );
}
 
export default Formulario;
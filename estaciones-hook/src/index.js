import React from 'react';
import ReactDOM from 'react-dom';
import DisplayEstacion from './DisplayEstacion';
import Spiner from './Spinner';
import useLocation from './useLocation';

/**
 * App, funcion que se ejecuta en primera instancia.
 * Retorna el contendor padre.  
 */
const App = () => {
    const [lat, errorMessage] = useLocation();
    let content;

    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <DisplayEstacion lat={lat} />;
    } else {
        content = <Spiner message="Acepta para continuar..." />;
    }

    return <div className='border red'>{content}</div>

};

ReactDOM.render(<App />, document.querySelector("#root"));
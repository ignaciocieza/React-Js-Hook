import React from 'react';

/**
 * Retorna contenedor Jsx, mostrando icono spinner de la biblioteca semantic-ui(public-index.html).
 * param props: propiedades heredadas a la funcion Spinner.
 */
const Spinner=(props)=>{
    return (
        <div className="ui active inverted dimmer">
            <div className="ui large text loader">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps={
    message:'Cargando...'
};

export default Spinner;
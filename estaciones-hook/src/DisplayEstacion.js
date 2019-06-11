import './DisplayEstacion.css';
import React from "react";

/**
 * Funcion que devuelve a traves de funcion ternaria, la estacion verano o invierno
 * param lat: dato de la latitud
 * param date: dato del mes actual 
 */
function getEstacion(lat, date) {
    if (date > 2 && date < 9) {
        return (lat > 0 ? "verano" : "invierno");
    }
    else {
        return lat > 0 ? "invierno" : "verano";
    }
}

/**
 * Generacion de un objeto que contiene objetos, indicando si es Verano o Invierno.
 */
const configuracionEstacion = {
    verano: {
        texto: "Es verano!",
        nombreIconoUno: 'chess bishop',
        nombreIconoDos: 'chess queen'
    },
    invierno: {
        texto: "Es invierno!",
        nombreIconoUno: 'chess rook',
        nombreIconoDos: 'chess knight'
    }
}

/**
 * Retorna contenedor Jsx, mostrando iconos y el texto de la estacion correspondiente.
 * param props: propiedades heredadas a la funcion DisplayEstacion.
 */
const DisplayEstacion = (props) => {
    const estacion = getEstacion(props.lat, new Date().getMonth());  
    const { texto, nombreIconoUno, nombreIconoDos } = configuracionEstacion[estacion];

    return (
        <div className={`display-estacion ${estacion}`}>
            <i className={`icono-izquierda massive ${nombreIconoUno} icon`}></i>
            <h1>{texto}</h1>
            <i className={`icono-derecha massive ${nombreIconoDos} icon`}></i>
        </div>
    );
};

export default DisplayEstacion;
import { useState, useEffect } from 'react';

/** 
  *Funcion que utiliza bilioteca de react (hook) para usar y setear los campos del estado.
  *retorna: latitud y el mensaje de error
  */ 
export default ()=>{    
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)            
        );
    }, []);

    return [lat,errorMessage];
};
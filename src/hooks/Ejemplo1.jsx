/**
 * Ejemplo de uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {
    const valorInicial = 0; // Valor inicial para un contador
    const personaInicial = { // Valor inicial para una persona
        nombre : 'Martín',
        email: 'martin@imaginagroup.com'
    }
    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // Función para actualizar el estado privado que contiene el contador
    function incrementarContador(){ 
        setContador(contador + 1); // funcionParaCambiar(nuevoValor)
    }

    // Función para actualizar el estado de persona en el componente
    function actualizarPersona(){ 
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;


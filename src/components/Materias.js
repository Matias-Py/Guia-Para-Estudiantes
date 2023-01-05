import React, { useEffect, useState } from 'react'
import "../components/Materias.css"

const Materias = ({lista, cambiarVisibilidad, identificador}) => {
        return(
            <div className='contenedor-lista-materias'>
                {lista.map(elemento => (
                    <div className="contenedor-materia" key={elemento.id}>
                        <h6>{elemento.nombre}</h6>
                        <button onClick={() => {cambiarVisibilidad(true); identificador(elemento.id)}}>Más info</button>
                    </div>
                 ))}
            </div>
    )
}

export default Materias
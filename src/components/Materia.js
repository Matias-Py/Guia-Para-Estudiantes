import axios from 'axios';
import "../components/Materia.css"
import React, { useEffect, useState } from 'react'

const Materia = ({ID, volver}) => {
    const [materia, setMateria] = useState([])
    const hook = () => {
        axios
          .get(`https://apiunpaz-production.up.railway.app/lgti/materias/${ID}`)
          .then(response => {
            setMateria(response.data)
          })
          .catch(error => {
            alert(`No se encuentra la materia ${ID}`)
          })
      }
    useEffect(hook,[])
    return(
        <div id='info-materia'> 
            <h4 id='titulo-de-materia'>{materia.nombre}</h4>
            <div id='contenedor-temas'>
              <p><span>Temas: </span>{materia.temas}</p>
              <p><span>Tipo de cursada: </span>{materia.tipo}</p>
              <p><span>Carga horaria semanal: </span>{materia.CargaSemanal} horas</p>
              <p><span>Carga horaria total: </span>{materia.cargaTotal} horas</p>
            </div>
            <button id="boton-volver" onClick={() => {volver(false)}}>Volver a buscar</button>
        </div>
    )
}

export default Materia
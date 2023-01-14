import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Materias from "./components/Materias"
import Materia from './components/Materia';


const App = () => {
  const [lista, setLista] = useState([])
  const [mostrarMateria, setMostrarMateria] = useState(false)
  const [id, setId] = useState("")
  const hook = () => {
    axios
      .get("https://apiunpaz-production.up.railway.app/lgti/materias")
      .then(response => {
        setLista(response.data)
      })
  }
  useEffect(hook,[])

  if(mostrarMateria === false){
    return (
      <>
        <div id='hero'>
          <div id='header'>
            <h1>LICENCIATURA EN GESTIÓN DE TECNOLOGÍAS DE LA INFORMACIÓN</h1>
            <h2>Guía de materias</h2>
          </div>
          <div id='years-container'>
            <h3 id='year'>Primer año</h3>
            <Materias lista={lista.filter(n => n.año === "1")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
            <h3 id='year'>Segundo año</h3>
            <Materias lista={lista.filter(n => n.año === "2")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
            <h3 id='year'>Tercer año</h3>
            <Materias lista={lista.filter(n => n.año === "3")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
            <h3 id='year'>Cuarto año</h3>
            <Materias lista={lista.filter(n => n.año === "4")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
            <h3 id='year'>Quinto año</h3>
            <Materias lista={lista.filter(n => n.año === "5")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
            <h3 id='year'>Optativas</h3>
            <Materias lista={lista.filter(n => n.año === "0")} cambiarVisibilidad = {setMostrarMateria} identificador = {setId}/>
          </div>
        </div>
      </>
    )
  }else if(mostrarMateria === true){
    return(
      <div id='contenedor-condicional-mostrar-materia'>
        <Materia ID={id} volver={setMostrarMateria}/>
        <p>Para más información el plan de estudios oficial de la carrera <a href='https://www.unpaz.edu.ar/sites/default/files/Reso%20CS%20171-18.pdf' target='_blank'>acá</a></p>
      </div>
    )
  }
};
export default App;

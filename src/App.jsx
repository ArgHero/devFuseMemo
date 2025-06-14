import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Formulario from './components/formulario/Formulario';
import Tareas from './components/tareas/Tareas';
import Acumulado from './components/acumulado/Acumulado';

function App() {

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [duracion, setDuracion] = useState('');

  // const calcularTiempoTotal = ()=>{
  //   let tiempoTotal = 0;
  //   tareas.forEach(tarea => {
  //       tiempoTotal+=tarea.duracion;
  //   });

  //   return tiempoTotal
  // }

  const calcularTiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  useEffect(()=>{
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  },[tareas])
  useEffect(()=>{
    setTareas(JSON.parse(localStorage.getItem("tareas"))||[])
  },[])


  function handleSubmit(event){
    event.preventDefault();
    const historial = [...tareas,{nombre: nuevaTarea, duracion: duracion}]
    setTareas(historial)
    localStorage.setItem("tareas",JSON.stringify(historial))
    setNuevaTarea("")
    setDuracion("")
  }

  return (
    <>
      <Acumulado calcularTiempoTotal={calcularTiempoTotal}/>
      <Formulario 
        nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} 
        duracion={duracion} setDuracion={setDuracion} 
        handleSubmit={handleSubmit}
      />
      <Tareas tareas={tareas} calcularTiempoTotal={calcularTiempoTotal}/>


    </>
  )
}

export default App

import { useState } from "react";
import "./Tareas.css"

function Tareas(props){
    const {tareas} = props;
    const [filtro, setFiltro] = useState(tareas)
    const [isFilter, setIsFilter] = useState(false);

    function handleFilter(event){
        event.preventDefault()
        setFiltro(tareas.filter(tarea=>tarea.duracion<=Number(event.target.value)))
        if(event.target.value.trim())
            setIsFilter(true)
        setIsFilter(false)
    }

    function crateList(list){
        return(<>
            {list.map((tarea,index) =>
                <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
            )} 
        </>)
    }

    return(<>
        <label htmlFor="txtFiltro">Duración máxima</label>
        <input type="number" name="txtFiltro" id="txtFiltro" onChange={handleFilter}/>
        <ul>
            {isFilter?crateList(tareas):crateList(filtro)}
        </ul>

    </>)
}

export default Tareas;
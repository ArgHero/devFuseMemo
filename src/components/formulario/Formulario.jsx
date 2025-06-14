import "./Formulario.css"

function Formulario(props){
    const {nuevaTarea, setNuevaTarea, duracion, setDuracion, handleSubmit} = props;

    function handleTareaChange(event){
        event.preventDefault();
        const txt = event.target.value.trim();
        setNuevaTarea(txt);
    }

    function handleDuracionChange(event){
        event.preventDefault();
        const number = Number(event.target.value)
        setDuracion(number) 
    }

    return(<form onSubmit={handleSubmit}>
        <div className="divisor">
            <div className="entrada">
                <label htmlFor="txtTarea">Nueva tarea: </label>
                <input 
                    id="txtTarea"
                    type="text" 
                    value={nuevaTarea}
                    onChange={handleTareaChange}
                    placeholder="Nombre de la tarea"
                    required
                />
            </div>

            <div className="entrada">
                <label htmlFor="txtDuración">Duración: </label>
                <input 
                    type="number" 
                    name="txtDuracion" 
                    id="txtDuracion"
                    value={duracion}
                    onChange={handleDuracionChange}
                    placeholder="Duración en minutos"
                    required
                />
            </div>
        </div>
        
        <button type="submit">Agregar tarea</button>
    </form>)
}

export default Formulario;
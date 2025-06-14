import "./Acumulado.css"

function Acumulado(props){

    const {calcularTiempoTotal} = props;

    return(<>
        <h3>Total de tiempo: {calcularTiempoTotal}</h3>
    </>)
}

export default Acumulado;
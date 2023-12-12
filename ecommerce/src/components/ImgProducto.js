import { Link } from "react-router-dom";

function ImgProducto({imagen,nombre,precio,tipo}){

    return(
        <>
        <div className="Card">
        <h2 className="title-Card">{nombre}</h2>
        <img src={imagen} alt={nombre} className="img-unica"/>
        <h2>Precio:${precio} </h2>
        <h2>Tipo:{tipo} </h2>
       <button>Detalles del producto</button> 
        </div>
        </>
    )
}
export default ImgProducto;
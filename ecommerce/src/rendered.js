import { Link } from "react-router-dom";
import ImgProducto from "./components/ImgProducto";

const Rendered = ({ productos }) => {

    const resultado = productos.map((Producto) => {
        return (
            <article>
                <ImgProducto key={Producto.id}
                    nombre={Producto.nombre}
                    imagen={Producto.imagen}
                    precio={Producto.precio} 
                    tipo={Producto.tipo} />

            </article>
        )
    })

    return resultado
}

export default Rendered;
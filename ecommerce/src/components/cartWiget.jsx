import { useState } from 'react'
import carrito from './assets/carrito.svg'


const CartWiget = () => {
    const [contClicks, setContClicks] = useState(0);

    const handleClick = () => {
        setContClicks(contClicks + 1);
    }

    return (
        <div onClick={handleClick} style={{ display: 'flex' }} >
            <img src={carrito} alt='carrito' width="112" height="28px" />
            <b style={{ color: 'black' }}> <p>{contClicks}</p></b>

        </div>
    )

}
if (CartWiget) {
    console.log("click")
}

export default CartWiget;
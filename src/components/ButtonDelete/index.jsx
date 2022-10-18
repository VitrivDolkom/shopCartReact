import { useContext } from "react";
import { CartContext } from "../Cart";


const ButtonDelete = () => {
    const { deleteProduct } = useContext(CartContext);
    return (
        <button type="button" onClick={() => deleteProduct()}>
            <img src="./img/remove.svg" alt="remove" />
        </button>
    );
}

export default ButtonDelete;
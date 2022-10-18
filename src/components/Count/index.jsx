import { useContext } from "react";
import "./style.scss";
import { CartContext } from "../Cart";

const Count = () => {
    const { count, upCount, downCount, changeValue } = useContext(CartContext);
    return (
        <div className="count">
            <div className="count__cont">
                <input type="number" className="count__input" min="1" max="50"
                    value={count}
                    onChange={(e) => changeValue(+e.target.value)} />
            </div>
            <div className="count__btn">
                <button type="button" className="count__up" onClick={() => upCount()}>
                    <img src="./img/up.svg" alt="add one more product" />
                </button>
                <button type="button" className="count__down" onClick={() => downCount()}>
                    <img src="./img/down.svg" alt="remove one product" />
                </button>
            </div>
        </div>);
}

export default Count;
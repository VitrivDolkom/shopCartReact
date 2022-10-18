import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";
import priceFormatter from "../../utilits/priceFormatter";

const CartProduct = ({ object }) => {
    const { name, srcImage, totalPrice } = object;
    return (
        <div className="product">
            <div className="product__img">
                <img src={srcImage} alt={name} />
            </div>
            <div className="product__title">{name}
            </div>
            <div className="product__count">
                <Count />
            </div>
            <div className="product__price">{priceFormatter.format(totalPrice)} руб.</div>
            <div className="product__remove">
                <ButtonDelete />
            </div>
        </div>
    );
}

export default CartProduct;
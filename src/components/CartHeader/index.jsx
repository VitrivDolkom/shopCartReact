import "./style.scss";

const CartHeader = () => {
    return (
        <header className="cart-header sec">
            <div className="cart-header__name">наименование</div>
            <div className="cart-header__count">количество</div>
            <div className="cart-header__price">стоимость</div>
        </header>
    );
}

export default CartHeader;
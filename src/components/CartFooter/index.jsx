import React, { useState, useEffect } from 'react';
import "./style.scss";
import priceFormatter from '../../utilits/priceFormatter';

const calcPrice = (el) => el.reduce((prev, prod) => { return prev + prod.totalPrice; }, 0);
const calcCount = (el) => el.reduce((prev, prod) => { return prev + prod.count; }, 0);


const CartFooter = ({ infoProducts }) => {
    const [calc, setCalc] = useState({
        price: null,
        count: null,
    })

    useEffect(() => {
        setCalc({
            price: calcPrice(infoProducts),
            count: calcCount(infoProducts),
        })
    }, [infoProducts]);

    return (
        <footer className="cart-footer sec">
            <div className="cart-footer__count">{calc.count} шт.</div>
            <div className="cart-footer__price">{priceFormatter.format(calc.price)}  руб.</div>
        </footer>
    );
}

export default CartFooter;
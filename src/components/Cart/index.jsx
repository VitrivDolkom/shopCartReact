import "./style.scss";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import productsDataArray from "../../data/productsData";
import CartProduct from "../CartProduct";
import { createContext, useState } from "react";

const CartContext = createContext(null);

const Cart = () => {
    const [data, setData] = useState(productsDataArray);

    const changeProductList = (indexToDelete) => {
        setData((prevDate) => prevDate.filter((el) => el.id !== indexToDelete));
    }
    const reCountTotalPrice = (el) => el.totalPrice = el.count * el.price;

    const increaseCount = (index) => {
        setData((prevData) => {
            return prevData.map((product) => {
                if (product.id === index) {
                    product.count++;
                    reCountTotalPrice(product);
                }
                return product;
            })
        });
    }

    const decreaseCount = (index) => {
        setData((prevData) => {
            return prevData.map((product) => {
                if (product.id === index && product.count > 1) {
                    product.count--;
                    reCountTotalPrice(product);
                }
                return product;
            })
        });
    }

    const changeValue = (index, value) => {
        setData((prevData) => {
            return prevData.map((product) => {
                if (product.id === index) {
                    product.count = value;
                    reCountTotalPrice(product);
                }
                return product;
            })
        })
    }

    const renderProduct = () => {
        return data.map((element) => {
            return (
                <CartContext.Provider key={element.id}
                    value={{
                        upCount: () => increaseCount(element.id),
                        downCount: () => decreaseCount(element.id),
                        changeValue: (newValue) => changeValue(element.id, newValue),
                        count: element.count,
                        deleteProduct: () => changeProductList(element.id),
                    }}>
                    <CartProduct object={element} />
                </CartContext.Provider>
            )
        });
    }
    return (
        <section className="cart">
            <div className="cart__body">
                <CartHeader />
                <main className="cart__main">
                    {renderProduct()}
                </main>
                <CartFooter infoProducts={data} />
            </div>
        </section>
    );
}


export { Cart, CartContext };
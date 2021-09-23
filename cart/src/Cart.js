import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: "iPhone",
                    qty: 5,
                    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    id: 1
                },
                {
                    price: 99,
                    title: "iWatch",
                    qty: 10,
                    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    id: 2
                },
                {
                    price: 1999,
                    title: "Macbook",
                    qty: 1,
                    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    id: 3
                }
            ]
        };
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id} />
                    })
                }
            </div>
        );
    }
}


export default Cart;

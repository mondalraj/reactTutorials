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

    handleIncreaseQuantity = (product) => {
        console.log("Increase this ", product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log("Decrease this ", product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty > 0) {
            products[index].qty -= 1;
            this.setState({
                products: products
            })
        }

    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id != id);
        this.setState({
            products: items
        })
    }

    render() {
        //destructuring to reduce complexity
        const { products } = this.state;
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return <CartItem product={product} key={product.id} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity={this.handleDecreaseQuantity} onDeleteProduct={this.handleDeleteProduct} />
                    })
                }
            </div>
        );
    }
}


export default Cart;

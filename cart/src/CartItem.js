import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: "iPhone",
            qty: 1,
            img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        };
    }

    increaseQuantity = () => {
        console.log(this.state);
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        this.setState((prevState) => {
            if (prevState.qty > 0) {
                return {
                    qty: prevState.qty - 1
                }
            }

        });
    }

    render() {
        //object destructuring
        const { price, title, qty, img } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img} alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>$ {price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            alt="increase"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            alt="decrease"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            className="action-icons"
                            src="https://img-premium.flaticon.com/png/512/484/premium/484662.png?token=exp=1632209344~hmac=76906e5f838bbb7f2f770568b98f4620"
                            alt="delete"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
    },
};

export default CartItem;

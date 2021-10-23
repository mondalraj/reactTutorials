import React from "react";

const CartItem = (props) => {

    //object destructuring
    const { price, title, qty, img } = props.product;
    const { product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct }
        = props;

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
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        className="action-icons"
                        src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
                        alt="delete"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 4,
    },
};

export default CartItem;

import React from 'react';

function CartItem() {
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>iPhone</div>
                <div style={{ color: '#777' }}>$ 699</div>
                <div style={{ color: '#777' }}>Qty: 1</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;

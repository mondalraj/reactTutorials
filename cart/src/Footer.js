import React from 'react';

function Footer(props) {
    return (
        <div style={styles.footer}>
            <div>Total Price: $ <span>{props.price}</span></div>
        </div>
    )
}

const styles = {
    footer: {
        fontSize: 25,
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 50,
        color: '#fff'
    }
}

export default Footer

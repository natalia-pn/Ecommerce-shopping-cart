import React, { Component } from 'react';

class PurchaseButton extends Component {
    render() {
        return(
            <div className="Purchase-button__container">
                <button type="button" className="Purchase-button">comprar</button>
            </div>   
        );
    }
}

export default PurchaseButton;
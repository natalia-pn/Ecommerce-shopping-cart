import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtotal extends Component {
    render() {
        const { totalPrice } = this.props;
        
        return(
            <div className="Subtotal__container">
                <p className="Subtotal">Subtotal</p>
                <p className="Subtotal__amount">{`${totalPrice}€`}</p>
            </div>    
        );
    }
}

Subtotal.propTypes = {
    totalPrice: PropTypes.string,
}

export default Subtotal;
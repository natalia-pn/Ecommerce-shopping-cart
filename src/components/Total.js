import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
    render() {
        const { totalPrice } = this.props;
        
        return(
            <div className="Total__container">
                <p className="Total">Total</p>
                <p className="Total__amount">{`${totalPrice}€`}</p>
            </div>  
        );
    }
}

Total.propTypes = {
    totalPrice: PropTypes.string,
}

export default Total;
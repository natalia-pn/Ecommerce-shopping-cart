import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalContainer extends Component {
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

TotalContainer.propTypes = {
    totalPrice: PropTypes.string,
}

export default TotalContainer;
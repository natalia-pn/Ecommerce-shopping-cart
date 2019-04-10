import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalContainer extends Component {
    render() {
        const { productsTotalAmount } = this.props;
        
        return(
            <div className="Total__container">
                <p className="Total">Total</p>
                <p className="Total__amount">{`${productsTotalAmount}€`}</p>
            </div>  
        );
    }
}

TotalContainer.propTypes = {
    productsTotalAmount: PropTypes.string,
}

export default TotalContainer;
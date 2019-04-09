import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PromotionalCode extends Component {
    render() {
        const { down } = this.props;
        
        return(
            <div className="Promotional-code__container">
                <p className="Promotional-code">Código promocional</p>
                <img className="Promotional-code__selection" src={down} alt="selection arrow"></img>
            </div>
        );
    }
}

PromotionalCode.propTypes = {
    down: PropTypes.string,
}

export default PromotionalCode;
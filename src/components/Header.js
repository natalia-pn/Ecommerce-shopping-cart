import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const { user, triggerShoppingBag, bag } = this.props;
        
        return(
            <header className="App-header">
                <img src={user} className="User-account" alt="user account"></img>
    
                <button className="Bag__trigger" onClick={triggerShoppingBag}><img src={bag} className="Shopping-bag" alt="shopping bag"></img></button>
            </header>
        );
    }
}

export default Header;

Header.propTypes = {
    user: PropTypes.string,
    triggerShoppingBag: PropTypes.func,
    bag: PropTypes.string
}
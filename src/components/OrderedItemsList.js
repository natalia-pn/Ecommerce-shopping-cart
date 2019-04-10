import React, { Component, Fragment } from 'react';
import OrderedItem from './OrderedItem';
import PropTypes from 'prop-types';

class OrderedItemsList extends Component {
    render() {
        const { productsArray, addQuantity, deductQuantity, removeProduct } = this.props;

        return(
            <Fragment>
                {productsArray.map(item =>
                    <OrderedItem 
                        key={item.id} 
                        image={item.image} 
                        description={item.description} 
                        size={item.size} 
                        price={item.price} 
                        quantity={item.quantity}
                        itemTotal={(item.quantity * item.price).toFixed(2).replace("." , ",")}
                        addQuantity={addQuantity}
                        deductQuantity={deductQuantity} 
                        removeProduct={removeProduct} 
                        productId={item.id} />)}
            </Fragment>
        );
    }
}

OrderedItemsList.propTypes = {
    productsArray: PropTypes.array,
    addQuantity: PropTypes.func,
    deductQuantity: PropTypes.func,
    removeProduct: PropTypes.func
}

export default OrderedItemsList;
import React, { Component, Fragment } from 'react';
import OrderedItem from './OrderedItem';
import PropTypes from 'prop-types';

class OrderedItemsList extends Component {
    render() {
        const { productsArray, addTotalProducts, deductTotalProducts, removeProduct, addQuantity, deductQuantity } = this.props;

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
                        itemTotal={(item.quantity * item.price).toFixed(2)}
                        addTotalProducts={addTotalProducts} 
                        addQuantity={addQuantity}
                        deductQuantity={deductQuantity} 
                        deductTotalProducts={deductTotalProducts} 
                        removeProduct={removeProduct} 
                        productId={item.id} />)}
            </Fragment>
        );
    }
}

OrderedItemsList.propTypes = {
    productsArray: PropTypes.array,
    addTotalProducts: PropTypes.func,
    deductTotalProducts: PropTypes.func,
    removeProduct: PropTypes.func
}

export default OrderedItemsList;
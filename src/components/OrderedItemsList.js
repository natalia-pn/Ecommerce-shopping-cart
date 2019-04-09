import React, { Component, Fragment } from 'react';
import OrderedItem from './OrderedItem';

class OrderedItemsList extends Component {
    render() {
        const { addTotalProducts, deductTotalProducts, removeProduct } = this.props;
        const { productsArray } = this.props;

        return(
            <Fragment>
                {productsArray.map(item =>
                  <OrderedItem 
                    key={item.id} 
                    image={item.image} 
                    description={item.description} 
                    size={item.size} price={item.price} 
                    addTotalProducts={addTotalProducts} 
                    deductTotalProducts={deductTotalProducts} 
                    removeProduct={removeProduct} 
                    productId={item.id} />)}
            </Fragment>
        );
    }
}

export default OrderedItemsList;
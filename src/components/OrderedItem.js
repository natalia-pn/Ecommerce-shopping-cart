import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OrderedItem extends Component {

    
    render() {
        const { image, description, size, removeProduct, productId, quantity, addQuantity={addQuantity} } = this.props;
        const { deductQuantity } = this;
    

        return(
            <div className="Order__summary">
                <div className="Order__image-container">
                    <img className="Vans-picture" src={image} alt="Vans shoes"></img>
                </div>
              
                <div className="Order__details">
                    <p className="Item__description">{description}</p>

                    <div className="Delete-action__container">
                      <button type="button" className="Delete-action__button" value={productId} onClick={removeProduct}><i className="far fa-trash-alt"></i></button>
                    </div>

                    <p className="Item__size">{`Talla: ${size}`}</p>

                    <div className="Quantity-display__container">
                      <button type="button" className="Quantity-increase__button Quantity" value={productId} onClick={addQuantity}>+</button>

                      <div className="Quantity-display__box Quantity">{quantity}</div>

                      <button  type="button" className="Quantity-decrease__button Quantity" value={productId} onClick={deductQuantity}>-</button>
                    </div>

                    <p className="Item__price">total</p>
                </div> 
            </div>
        );
    }
}

OrderedItem.propTypes = {   
    image: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.number,
    removeProduct:PropTypes.func,
    productId: PropTypes.number
}

export default OrderedItem;
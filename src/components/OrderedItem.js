import React, { Component } from 'react';


class OrderedItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quantity: 1,
          itemTotal: this.props.price
        }
      }

    addQuantity = (e) => {
        const addButtonValue = e.currentTarget.value;

        console.log(addButtonValue)

        this.setState(prevState => {
            if(prevState.quantity < 10) {
                this.props.addTotalProducts(addButtonValue)
                return {
                    quantity: prevState.quantity + 1,
                    itemTotal: prevState.itemTotal + this.props.price
                }
            } else {
                return null;
            }
           
        });
        console.log(this.state.itemTotal)
    }


    deductQuantity = (e) => {
        const addButtonValue = e.currentTarget.value;

        this.setState(prevState => {
            if(prevState.quantity > 1) {
                this.props.deductTotalProducts(addButtonValue)
                return {
                    quantity: prevState.quantity - 1,
                    itemTotal: prevState.itemTotal - this.props.price
                }
            } else {
                return null;
            }
        });
      
        console.log(this.state.itemTotal)
    }



    
    render() {
        const { image, description, size, removeProduct, productId } = this.props;
        const { quantity, itemTotal } = this.state;
        const { addQuantity, deductQuantity } = this;

        const total = itemTotal.toFixed(2);

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

                    <p className="Item__size">{`Talla: ${size} `}</p>

                    <div className="Quantity-display__container">
                      <button type="button" className="Quantity-increase__button Quantity" value={productId} onClick={addQuantity}>+</button>

                      <div className="Quantity-display__box Quantity">{`${quantity}`}</div>

                      <button  type="button" className="Quantity-decrease__button Quantity" value={productId} onClick={deductQuantity}>-</button>
                    </div>

                    <p className="Item__price">{`${total}€`}</p>
                </div> 
            </div>
        );
    }
}

export default OrderedItem;
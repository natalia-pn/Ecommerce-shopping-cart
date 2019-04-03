import React, { Component } from 'react';


class OrderedItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          quantity: 1,
          itemTotal: this.props.price
        }
      }

    addQuantity = () => {
        this.setState(prevState => {
            if(prevState.quantity < 10) {
                this.props.addTotalProducts()
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


    deductQuantity = () => {
        this.setState(prevState => {
            if(prevState.quantity > 1) {
                this.props.deductTotalProducts()
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
        const { image, description, size, price } = this.props;
        const { quantity, itemTotal } = this.state;
        const { addQuantity, deductQuantity } = this;

        const total = itemTotal.toFixed(2);

        return(
            <div className="Order__summary">
                  <img className="Vans-picture" src={image} alt="Vans shoes"></img>
              
                <div className="Order__details">
                    <p className="Item__description">{description}</p>

                    <div className="Delete-action__container">
                      <button type="button" className="Delete-action__button"><i className="far fa-trash-alt"></i></button>

                      <p className="Delete-action">Eliminar</p>
                    </div>

                    <p className="Item__size">{`Talla: ${size} `}</p>

                    <p className="Item__price">{total}</p>

                    <div className="Quantity-display__container">
                      <button type="button" className="Quantity-increase__button" onClick={addQuantity}>+</button>
                      <div className="Quantity-display__box">{`${quantity}`}</div>
                      <button  type="button" className="Quantity-decrease__button" onClick={deductQuantity}>-</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default OrderedItem;
import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import { clearItemFromCart,addItemToCart,removeCartItem } from '../../redux/cart/cart.action'
const CheckoutItem = ({ cartItem, clearItemFromCart,addItemToCart,removeCartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeCartItem(cartItem)}>&#10094;</div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={()=>addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button">
                <p onClick={() => { clearItemFromCart(cartItem) }}>&#10006;</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart:(item)=>dispatch(addItemToCart(item)),
    removeCartItem:(item)=>dispatch(removeCartItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
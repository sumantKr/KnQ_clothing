import React from 'react'
import { CustomButton } from '../custom-button/CustomBottom.component'
import CartItem from '../cart-item/CartItem.component'
import { connect } from 'react-redux'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(
                    cartItem =>
                        <CartItem key={cartItems.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems: cartItems
})
export default connect(mapStateToProps)(CartDropdown)
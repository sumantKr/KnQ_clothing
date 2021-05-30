import React from 'react'
import {CustomButton} from '../custom-button/CustomBottom.component'
import './cart-dropdown.scss'

const CartDropdown=()=>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

export default CartDropdown
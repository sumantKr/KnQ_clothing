import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import './cart-icon.scss'
import {toggleCartHidden} from '../../redux/cart/cart.action'
const CartIcon=({toggleCartVisibility})=>(

    <div className="cart-icon" onClick={toggleCartVisibility}  >
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    toggleCartVisibility:()=>{
        dispatch(toggleCartHidden())}
})

export default connect(null,mapDispatchToProps)(CartIcon);
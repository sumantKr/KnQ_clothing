import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import './cart-icon.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon = ({ toggleCartVisibility,cartItemsLength}) => (

    <div className="cart-icon" onClick={toggleCartVisibility}  >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsLength}</span>
    </div>
)

const mapStateToProps = createStructuredSelector(
    { cartItemsLength: selectCartItemsCount}

)

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => {
        dispatch(toggleCartHidden())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
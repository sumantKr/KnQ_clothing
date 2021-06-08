import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'
import './checkout.scss'

const CheckoutPage = ({cartItems,totalValue}) => (
    <div className="checkout-page">
    {console.log(cartItems)}
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length?
            cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            :
            <h1 style={
                {
                marginTop:20+'px'}
            }>The bag feels very light</h1>    
        }
        <div className="total">
            <span>TOTAL : Rs.{totalValue}</span>
        </div>
        <div className="test-warning">
        *Please use the following test card for payment*
        <br/>
        4242 4242 4242 4242 -Exp::01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={totalValue}/>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    totalValue:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)
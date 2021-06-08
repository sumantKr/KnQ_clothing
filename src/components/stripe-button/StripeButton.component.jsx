import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51J07LXSJRbJkPQ3EjNM2CHj0irMtjLZhYhWR00nKBEARaov03PthE7Dm1KeikGvNc5jCndCQ5X6viPOBoOpsZ61i00Z1FNxyfL'
    function onToken(token){
        console.log(token);
        alert('Payment Succesful, Order is Done!!')
    }
    return(
        <StripeCheckout
        label="Pay Now"
        name="KnQ_Clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is Rs.${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
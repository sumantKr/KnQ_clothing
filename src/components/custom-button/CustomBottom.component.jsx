import React from 'react'
import './custom-button.scss'



export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <div  className={`${isGoogleSignIn ? 'google-sign-in' : ''} 
            ${inverted ? 'inverted' : ''} custom-button  `} {...otherProps}>
        {children}
    </div>
)
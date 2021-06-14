import React from 'react'
import styled from 'styled-components'
import './custom-button.scss'

const CustomButtonContainer = styled.button`
      
     
      
      
`


export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <CustomButtonContainer  className={`${isGoogleSignIn ? 'google-sign-in' : ''} 
            ${inverted ? 'inverted' : ''} custom-button  `} {...otherProps}>
        {children}
    </CustomButtonContainer>
)
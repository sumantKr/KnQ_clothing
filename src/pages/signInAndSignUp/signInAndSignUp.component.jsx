import React from 'react'
import './signInAndSignUp.scss'
import {SignIn} from '../../components/signIn/SignIn.component.jsx'
import {SignUp} from '../../components/sign-up/SignUp.component'
export const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
    </div>
)
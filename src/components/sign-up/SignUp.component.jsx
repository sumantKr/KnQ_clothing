import React from 'react'
import { FormInput } from '../form_input/form_input.component'
import { CustomButton } from '../custom-button/CustomBottom.component'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils.js'
import './sign-up.scss'

export class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmpassword } = this.state
        if (password !== confirmpassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, { displayName })
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: ' ',
                    confirmpassword: ''
                }
                )
            }
            catch (error) {
                console.log(error);
            }
        }
        render() {
            const { displayName, email, password, confirmpassword } = this.state
            return (
            <div className='sign-up'>
                <h2 className="title">Do not have an account?</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Display Name"
                required
            />
            <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
            />
            <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
            />
            <FormInput
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
            />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
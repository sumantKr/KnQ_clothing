import React from 'react';
import './sign-in.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { FormInput } from '../form_input/form_input.component.jsx'
import { CustomButton } from '../custom-button/CustomBottom.component.jsx'
export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>Sign in with you email and password</span>
                <form onSubmit={
                    (event) => {
                        event.preventDefault()
                        this.setState({ email: '', password: '' })
                    }
                }>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn >Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
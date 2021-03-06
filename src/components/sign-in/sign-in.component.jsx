import React from 'react';
import FormInput from  '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''});

        } catch (error) {
            console.log ('Error logging in user with password', error.message);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your account and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton 
                            onClick={ signInWithGoogle }
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                    <div className='buttons'>
                        <CustomButton 
                            onClick={signInWithFacebook}
                            isFacebookSignIn
                        >
                            Sign In With Facebook
                        </CustomButton>
                        <CustomButton 
                            onClick={signInWithTwitter}
                            isTwitterSignIn
                        >
                            Sing In With Twitter
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
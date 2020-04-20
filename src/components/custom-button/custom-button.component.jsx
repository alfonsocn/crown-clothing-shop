import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isFacebookSignIn, isTwitterSignIn, ...otherProps }) => (
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : 
            isFacebookSignIn ? 'facebook-sign-in' : 
            isTwitterSignIn ? 'twitter-sign-in' : ''} custom-button`} 
        { ...otherProps }
    >
        {children}
    </button>
);

export default CustomButton;
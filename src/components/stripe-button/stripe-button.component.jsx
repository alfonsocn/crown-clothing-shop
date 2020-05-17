import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9Xwabm04vcA7dvNUmS7hCMQf00eZmlke2j';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing S.A de C.V'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
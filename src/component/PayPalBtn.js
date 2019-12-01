import React from 'react';
import { PayPalButton } from 'react-paypal-button'
 
// const CartColumn = (props) => {

 const PayPalBtn = (props) =>{
  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture'
  }
 
  const buttonStyles = {
    layout: 'vertical',
    shape: 'pill',
    color: 'blue',
    label: 'checkout',
  }

  const successMessage  = () => {
    props.history.push('/');
    return props.clearCart();
  }

  
  if (!props) {
	  return ('Loading');
  }
  
  console.log(props);
  return (
    <PayPalButton
      paypalOptions={paypalOptions}
      buttonStyles={buttonStyles}
      amount={props.total}
      onPaymentSuccess={successMessage}
    />
  )
}

export default PayPalBtn;
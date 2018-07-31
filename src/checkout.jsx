import React, { Component } from 'react';

export default function CheckoutButton(props) {
  return(
    <div className="checkoutButton" onClick={props.letsCheckout}>Checkout</div>
  )
}
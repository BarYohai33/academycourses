import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm'
class Payment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {boom: ''};
    }
  
  
    render() {
  
      return (
     <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1 style={{textAlign:'center'}}>Paiement</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      )}
}

export default Payment;
import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../payment/components/CheckoutForm';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boom: ''};
  }


  render() {
  	const { classes } = this.props;
    return (
    <div>
      <h1>Home Page</h1>
             <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>

     </div>

    );
  }
}



export default Home;
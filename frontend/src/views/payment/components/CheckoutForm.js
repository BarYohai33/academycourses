import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  


  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) this.setState({complete: true});
  }

  
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    
    return (
    
      <div className="checkout">
        <Grid container direction="row" justify="center">
        <Grid item xs={10} sm={6} md={3} style={{marginRight:'20px',marginTop:'20px'}}>
        <p>Finalisez le paiement du cours</p>
        <p> Prix : price</p>
        <CardElement
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onReady={handleReady}
        {...CARD_ELEMENT_OPTIONS} />
        <div style={{textAlign:'center'}}>
        <button onClick={this.submit} className="stripeButton">Payer</button>
        </div>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import store from "../../../store";
import { Link } from 'react-router-dom';
import { createInvoice } from '../../../actions/course'

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
      if(token){
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
    
        await createInvoice();


      if (response.ok) this.setState({complete: true});
      }
}

  
  render() {
    if (this.state.complete) {
      return (
        <div>
        <h1 style={{textAlign:"center"}}>Commande bien prise en compte</h1>
        <p>pour voir votre facture cliquez <Link to="/invoices">ici</Link></p>
        </div>
      );
    }

    
    return (
    
      <div className="checkout">
        <Grid container direction="row" justify="center">
        <Grid item xs={10} sm={6} md={3} style={{marginRight:'20px',marginTop:'20px'}}>
        <p> Classe : { store.getState().course.currentCourse.classe }</p>
        <p> Cours : { store.getState().course.currentCourse.course }</p>
        <p> Créneau : { store.getState().course.currentCourse.slot }h</p>
        <CardElement
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onReady={handleReady}
        {...CARD_ELEMENT_OPTIONS} />
        <div style={{textAlign:'center'}}>
        <button onClick={this.submit} className="stripeButton">Payer { store.getState().course.currentCourse.price }€</button>
        </div>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
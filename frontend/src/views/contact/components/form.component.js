// React
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';

// Style
import Style from '../styles/form.style';
const ContactForm = props => (
  <Grid container direction="row" justify="center" alignItems="center">
      <FormControl>
            <FormControl style={ Style.form }>
            <Input
            type="email"
            placeholder="Email"
            name="email"
            />
            </FormControl>
            <FormControl style={ Style.form }>
            <Input
            type="password"
            placeholder="Mot de passe"
            className="form-control"
            name="password"
            />
            </FormControl>
            <Button 
            variant="contained" 
            color="primary" 
            style={Style.button} 
            type="submit"
            >
            Envoyer à l'administrateur 
            </Button> 
    </FormControl>
    
  </Grid>


)
export default ContactForm;
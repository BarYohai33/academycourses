// React
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';

// Style
import Style from '../styles/form.style';
const LoginForm = props => (
  <Grid container direction="row" justify="center" alignItems="center" style={{backgroundColor:'#e6e6e6'}}>
      <FormControl>
            <FormControl style={ Style.form }>
            <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={ props.onChange }
            value={ props.email }
            error= {props.errors.email}
            />
            </FormControl>
            {props.errors.email && (<div style={Style.error}>{props.errors.email}</div>)}
            <FormControl style={ Style.form }>
            <Input
            type="password"
            placeholder="Mot de passe"
            className="form-control"
            name="password"
            onChange={ props.onChange }
            value={ props.password }
            error= {props.errors.password}
            />
            </FormControl>
            {props.errors.password && (<div style={Style.error}>{props.errors.password}</div>)}
            <Button 
            variant="contained" 
            color="primary" 
            style={Style.button} 
            type="submit"
            onClick={props.onSubmit}
            >
            Se connecter 
            </Button> 
    </FormControl>
    
  </Grid>


)
export default LoginForm;
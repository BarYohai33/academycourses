// React
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';
import classnames from 'classnames';



// Style
import Style from '../styles/form.style';
const LoginForm = props => (
  <Grid container direction="row" justify="center" alignItems="center">
      <FormControl>
            <FormControl style={ Style.form }>
            <Input
            type="email"
            placeholder="Email"
            className={classnames('form-control form-control-lg', {
                        'is-invalid': props.errors.email
                    })}
            name="email"
            onChange={ props.onChange }
            value={ props.email }
            />
            {props.errors.email && (<div className="invalid-feedback">{props.errors.email}</div>)}
            </FormControl>
            <FormControl style={ Style.form }>
            <Input
            type="text"
            placeholder="Mot de passe"
            className="form-control"
            name="password"
            onChange={ props.onChange }
            value={ props.password }
            />
            </FormControl>
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
// React
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';



// Style
import Style from '../styles/form.style';
const SignupForm = props => (
	<Grid container direction="row" justify="center" alignItems="center">
      <FormControl>
		<FormControl style={ Style.form }>
		<Input
		type="text"
            placeholder="Nom"
            name="lastname"
            onChange={ props.onChange }
            value={ props.lastname }
            error= {props.errors.lastname}
            />
            </FormControl>
            {props.errors.lastname && (<div style={Style.error}>{props.errors.lastname}</div>)}
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Prénom"
            name="firstname"
            onChange={ props.onChange }
            value={ props.firstname }
            error= {props.errors.firstname}
            />
            </FormControl>
            {props.errors.firstname && (<div style={Style.error}>{props.errors.firstname}</div>)}
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Ville"
            name="city"
            onChange={ props.onChange }
            value={ props.city }
            error= {props.errors.city}
            />
            </FormControl>
            {props.errors.city && (<div style={Style.error}>{props.errors.city}</div>)}
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
            name="password"
            onChange={ props.onChange }
            value={ props.password }
            error= {props.errors.password}
            />
            </FormControl>
            {props.errors.password && (<div style={Style.error}>{props.errors.password}</div>)}
            <FormControl style={ Style.form }>
            <Input
		type="password"
            placeholder="Répétez le mot de passe"
            name="passwordRepeat"
            onChange={ props.onChange }
            value={ props.passwordRepeat }
            error= {props.errors.passwordRepeat}
            />
            </FormControl>
            {props.errors.passwordRepeat && (<div style={Style.error}>{props.errors.passwordRepeat}</div>)}
		<Button 
		variant="contained" 
		color="primary" 
		style={Style.button} 
		type="submit"
            onClick={props.onSubmit}
		>
		S'inscrire 
		</Button> 
      </FormControl>
		
	</Grid>



)
export default SignupForm;


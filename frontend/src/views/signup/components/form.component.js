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
            className="form-control"
            name="lastname"
            onChange={ props.onChange }
            value={ props.lastname }
            />
            </FormControl>
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Prénom"
            className="form-control"
            name="firstname"
            onChange={ props.onChange }
            value={ props.firstname }
            />
            </FormControl>
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Ville"
            className="form-control"
            name="city"
            onChange={ props.onChange }
            value={ props.city }
            />
            </FormControl>
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Email"
            className="form-control"
            name="email"
            onChange={ props.onChange }
            value={ props.email }
            />
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
            <FormControl style={ Style.form }>
            <Input
		type="text"
            placeholder="Répétez le mot de passe"
            className="form-control"
            name="passwordRepeat"
            onChange={ props.onChange }
            value={ props.passwordRepeat }
            />
            </FormControl>
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


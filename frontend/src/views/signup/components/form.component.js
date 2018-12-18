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
		<FormControl style={ Style.form }>
			<Input
			placeholder="Nom"/>
			<Input
			placeholder="Prenom"/>
			<Input
			placeholder="Ville"/>
			<Input
			placeholder="Prenom"/>
			<Input
			placeholder="E-mail"/>
			<Input
			placeholder="Mot de passe"/>
			<Input
			placeholder="Confirmer le mot de passe"/>
			<Route render={({ history }) => (
			<Button variant="contained" color="primary" style={Style.button}
			onClick={() => { history.push('/home') }}>
			S'inscrire 
      		</Button> )} />
		</FormControl>
	</Grid>


)
export default SignupForm;


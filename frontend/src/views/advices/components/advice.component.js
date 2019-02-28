import React from 'react';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';
import MediaQuery from 'react-responsive';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import store from '../../../store';
import Style from '../styles/advice.style';
import { createAdvice } from '../../../actions/advice';

class Advice extends React.Component {
    constructor(props) {
    super(props);
  
		this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
		this.state = { 
			rating: 0,
			message: ''
		};
	}


	handleSubmit(e) {
		e.preventDefault();
		console.log(store.getState());
		console.log(this.state.message)
		store.dispatch(createAdvice(this.state.message))
		console.log(store.getState());
		console.log(this.state.message)
	}

	handleMessageChange (e) {
		this.setState({ message: e.target.value });
 	}

  changeRating(rating) {
    this.setState({
      rating: rating
    })
  }
    render() {
      // rating = 2;

     return (
     	<div>
			<FormControl>
        <Input
        type="message"
        placeholder="Ajouter un avis"
        className="form-control"
				name="message"
				value={this.state.message}
				onChange={this.handleMessageChange}
        multiline={true}
        rows={5}
        rowsMax={8}
        width={100}
        />
				<Button 
				variant="contained" 
				color="primary" 
				style={Style.button} 
				type="submit"
				onClick={this.handleSubmit}
				>
				Ajouter l'avis
				</Button> 
      </FormControl>
     	<MediaQuery query="(min-device-width: 850px)">
		<Grid container  style={Style.block}>
			<Grid item xs={6} sm={6} md={9}>
				<div style={{fontFamily:'caveat',marginLeft:'4px'}}>{this.props.pseudo}</div>
			</Grid>
			
			<div style={{marginLeft:'auto', marginRight:0}}>{this.props.date}</div>
			<div style={{marginLeft:'auto', marginRight:0}}>	
			<StarRatings
				rating={this.props.rating}
				changeRating={this.changeRating}
				starRatedColor="#f5f900"
				numberOfStars={5}
				name='rating'
				starDimension="28px"
				starSpacing="2px"
				starHoverColor="#f5f900"
				/>
			</div>

			<Grid item xs={12} sm={12} md={12} style={Style.sentences}>
			<div style={{fontFamily:'arial',marginLeft:'4px'}}>{this.props.advice}</div>
			</Grid>
		</Grid>
		</MediaQuery>
		<MediaQuery query="(max-device-width: 850px)">
		<Grid container  style={Style.block}>
			<Grid item xs={6} sm={6} md={6}>
				<div style={{fontFamily:'caveat',marginLeft:'4px'}}>{this.props.pseudo}</div>
			</Grid>
			<Grid item xs={6} sm={6} md={6}>
			<div style={{marginLeft:'40px'}}>{this.props.date}</div>
			<div>	
			<StarRatings
				rating={this.props.rating}
				changeRating={this.changeRating}
				starRatedColor="#f5f900"
				numberOfStars={5}
				name='rating'
				starDimension="23px"
				starSpacing="1px"
				starHoverColor="#f5f900"
				/>
			</div>
			</Grid>

			<Grid item xs={12} sm={12} md={12} style={Style.sentences}>
			<div style={{fontFamily:'arial',marginLeft:'4px'}}>{this.props.advice}</div>
			</Grid>
		</Grid>
		</MediaQuery>
		</div>

		
	)
    }
}

export default Advice;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';
import MediaQuery from 'react-responsive';

import Style from '../styles/advice.style'

class Advice extends React.Component {
    constructor(props) {
    super(props);
  
		this.changeRating = this.changeRating.bind(this);
		this.state = { 
		rating: 0 
		};
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
import React from 'react';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';

import Style from '../style/advice.style'

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
		<Grid container  style={Style.block}>
			<Grid item xs={6} sm={6} md={6}>
				<div style={{fontFamily:'caveat',marginLeft:'4px'}}>{this.props.pseudo}</div>
			</Grid>
			<Grid item xs={6} sm={6} md={6}>
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
			</Grid>

			<Grid item xs={12} sm={12} md={12} style={Style.sentences}>
			<div style={{fontFamily:'arial',marginLeft:'4px'}}>{this.props.advice}</div>
			</Grid>
		</Grid>
		
	)
    }
}

export default Advice;
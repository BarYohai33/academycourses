import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Advice from './components/advice.component';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import ratingPicture from './img/rating.jpg';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import store from '../../store';
import { createAdvice, getLastAdvice } from '../../actions/advice';
import { connect } from 'react-redux';
import LastAdvice from './components/lastAdvice.component';

class Advices extends Component {
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
        store.dispatch(createAdvice(this.state.message, this.state.rating))
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
    
    return (
    <div>
     <MediaQuery query="(min-device-width: 850px)">
    <div style={{position: 'relative',
    height:'300px',
    width: '100%',
    overflow: 'hidden'}}>
    <img src={ratingPicture} 
       style={{ width: '100%',
        height: 'auto',
        overflow: 'hidden'}}
      />
    </div>
    </MediaQuery>
    {store.getState().auth.isAuthenticated ? (
    <div style={{textAlign:'center',}}>
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
            <h3>Notez votre avis</h3>
            <StarRatings
            rating={this.state.rating}
            changeRating={this.changeRating}
            starRatedColor="#f5f900"
            numberOfStars={5}
            name='rating'
            starDimension="28px"
            starSpacing="2px"
            starHoverColor="#f5f900"
            />
            <Button 
            variant="contained" 
            color="primary" 
            style={{marginTop:'10px',}} 
            type="submit"
            onClick={this.handleSubmit}
            >
            Vous aussi donnez votre avis
            </Button> 
      </FormControl>
      </div>) : ('')} 
    <Grid container direction="column" justify="center">
           
    <h1  
    style={{fontFamily:'Dancing Script',fontSize:'50px',textAlign:'center'}}> 
    Tout le monde en parle ... 
    </h1>
    <h4  
    style={{fontFamily:'Dancing Script',fontSize:'30px',textAlign:'center'}}> 
    Moyenne : 
    <StarRatings
        rating={4.2}
        starRatedColor="#f5f900"
        numberOfStars={5}
        name='rating'
        starDimension="30px"
        starSpacing="1px"
        starHoverColor="#f5f900"
        />
    </h4> 
    </Grid>
    <Grid container direction="row" justify="center">
      <Grid key={1} item xs={12} sm={12} md={8} >
        <LastAdvice/>
        </Grid>
        </Grid>
        <Grid container direction="row" justify="center" style={{marginTop:'12px'}}>
            <Button style={{marginTop:'10px'}} 
            variant="contained" 
            color="default" >
                <div style={{marginLeft:'4px',marginBottom:'2px'}}>Voir plus d'avis</div>
            </Button>
        </Grid>
    </div>
     
    );
  }
}

/* const mapStateToProps = (state) => ({
  messages: state.advice.messages
})*/

export default Advices
// export default connect(mapStateToProps, { getLastAdvice })(Advices)
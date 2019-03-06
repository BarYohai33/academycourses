import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Advice from './components/advice.component';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import ratingPicture from './img/rating.jpg';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Style from './styles/advice.style'
import store from '../../store';
import { createAdvice, setAdvice } from '../../actions/advice';

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
      </div>
      <div> {this.state.message} </div>
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
          <Grid item xs={12} sm={12} md={7} style={{marginTop:'30px'}}>
            <Advice
            date='12/02/2019'
            pseudo='David Cohen'
            rating={3}
            advice="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin, mi ut mattis viverra, augue purus varius sapien, vel elementum lacus lorem ut lorem. Vivamus vel consequat urna. Nunc posuere, nulla in pretium rhoncus, nisi diam tempor lectus, sit amet ullamcorper mi augue non est. Sed sit amet erat eu sapien vehicula pellentesque. Maecenas at fermentum urna. Integer eu felis et neque venenatis rhoncus in vitae nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Pellentesque quis blandit risus. Donec metus mauris, efficitur ut ligula eu, volutpat tempus mauris. Integer ac libero pretium, mattis leo vitae, molestie libero. Donec bibendum vestibulum nisl, eu malesuada quam rutrum eu. In hac habitasse platea dictumst. Etiam tristique, elit ut cursus condimentum, quam nibh egestas nunc, ut tristique sem justo at nibh. Curabitur consectetur non nisi eu pharetra. Ut vel nulla lacinia, molestie tortor quis, imperdiet dolor. Mauris justo nisi, commodo quis sem non, vulputate tempus ipsum. Nulla accumsan velit enim, id tempor velit semper id. Nam ac mauris lorem. Aliquam erat volutpat. Praesent cursus malesuada posuere. Nunc ac mollis risus. Aenean mattis arcu quis vehicula consectetur.e"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} style={{marginTop:'20px'}}>
            <Advice
            date='09/02/2019'
            pseudo='Nathan Marciano'
            rating={4.5}
            advice="Ces cours m'ont amener vers une réussite certaine Ces cours m'ont amener vers une réussite certaine"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} style={{marginTop:'20px'}}>
            <Advice
            date='03/02/2019'
            pseudo='Willy Zagdhounerie'
            rating={5}
            advice="Poture Copureur Mange tes morts iosjgpr sitjpr  isjfp if jpszzpo kz^fozpf bkabka bkabk  bkabka abkabka  "
            />
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

export default Advices;
import React from 'react';
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from '../payment/components/CheckoutForm'
import Pricing from '../prices/components/pricing.component'
import Advice from '../advices/components/advice.component'
import LastAdvice from '../advices/components/lastAdvice.component'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';




// #Some CSS tricks 
 
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  container: {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
  },
  titleHighScreen: {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '50px',
  },
  titleLittleScreen: {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '17px',
  },
  buttonDesign: {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '30px',
  backgroundColor:'white',
  color:'black',
  textTransform:'none',
  },
  pushRight: {
    paddingRight:'10px',
    paddingTop:'5px'
  },
  centered: {
    textAlign: 'center',
  }
});

// #Font 

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boom: ''};
  }


  render() {
    const { classes } = this.props;

    return (
    <div style={{backgroundColor:'white'}}>
    <div className={classes.container}>
      <img 
      src="https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      style={{width:'100%',marginBottom:'20px',}}
      />
      <MediaQuery query="(min-device-width: 850px)">
      <div 
      className={classes.titleHighScreen} 
      style={{fontFamily:'Pacifico', }}>
      Les cours de soutien du primaire au lycée
      </div>
      <Button 
       variant="contained" 
       color="default" 
       className={classes.buttonDesign} 
       href="#Offers">
       <div>
       <svg className={classes.pushRight}  
       xmlns="http://www.w3.org/2000/svg" 
       width="24" 
       height="24" 
       viewBox="0 0 24 24">
       <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
       </svg>
        Découvir nos offres
        </div>
      </Button>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 850px)">
      <div 
      className={classes.titleLittleScreen} 
      style={{fontFamily:'Pacifico', }}>
      Les cours de soutien du primaire au lycée
      </div>
      </MediaQuery>
       
    </div>
      <div className={classes.layout}>
        <h1 className={classes.centered} 
        id="Offers" 
        style={{fontFamily:'Dancing Script',fontSize:'50px'}}> 
        Nos offres 
        </h1>
          <Grid container spacing={40}>
          <Grid item xs={12} sm={6} md={4}>
            <Pricing
            coursetype="Cours particuliers"
            to="/prices"
            discover="Nos cours particuliers sont à domicile, dans les locaux ou au domicile du professeur"
            button="Voir les tarifs"
            adapted="Adapté au rythme de l'élève"/>
             </Grid>
             <Grid item xs={12} sm={6} md={4}>
            <Pricing
            coursetype="Cours en ligne"
            to="/prices"
            discover="Nos cours en ligne sont particuliers ou en groupe. Les cours sont en visioconférence"
            button="Voir les tarifs"
            adapted="En visioconférence"/>
            </Grid>
             <Grid item xs={12} sm={6} md={4}>
            <Pricing
            coursetype="Cours en groupe"
            to="/prices"
            discover="Nos cours en groupe sont par période et parfois en stage vacance"
            button="Voir les tarifs"
            adapted="Stage intensif"/>
            </Grid>
          </Grid>
       
      </div>
      <hr width="30%" style={{marginTop:'30px'}}/>
        <h1 
        className={classes.centered} 
        style={{fontFamily:'Dancing Script',fontSize:'50px'}}> 
        Contactez nous
        </h1>
          <div style={{width:'80%', height:'300px', backgroundColor:'#e6e6e6',margin:'auto'}}> 
            <div style={{width:'70%', height:'260px', backgroundColor:'white',margin:'auto',}}> 
            <div style={{textAlign:'center',paddingTop:'30px'}}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
            </svg>
            </div>
            <div style={{textAlign:'center'}}>
            <Link to="/contact" style={{textDecoration:'none'}}><Button 
            style={{marginTop:'10px'}} 
            variant="contained" 
            color="primary" 
            className={classes.button}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" height="14" 
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/>
            </svg>
            <div style={{marginLeft:'4px',marginBottom:'2px'}}>Envoyez un message</div>
            </Button>
            </Link>
            </div>
             <div style={{textAlign:'center'}}>
            <Button 
            style={{marginTop:'10px'}} 
            variant="contained" 
            color="default" 
            className={classes.button}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <div style={{marginLeft:'4px',marginBottom:'2px'}}>Appelez nous par téléphone</div>
            </Button>
            </div>
             <div style={{textAlign:'center'}}>
            <Button style={{marginTop:'10px'}} 
            variant="contained" 
            color="default" 
            className={classes.button}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
            <div style={{marginLeft:'4px',marginBottom:'2px'}}>Prendre RDV dans nos locaux</div>
            </Button>
            </div>
            </div>
          </div>
        <hr width="30%" style={{marginTop:'30px'}}/>
      <h1 className={classes.centered} style={{fontFamily:'Dancing Script',fontSize:'50px'}}> Tout le monde en parle ...</h1>
      <Grid container direction="row" justify="center">
      <Grid item xs={10} sm={6} md={3} style={{marginRight:'20px',marginTop:'20px'}}>
        <LastAdvice/>
      </Grid>
      </Grid>
        <Grid container direction="row" justify="center">
            <Link to="/advices" style={{textDecoration:'none'}}>
              <Button style={{marginTop:'10px'}} 
              variant="contained" 
              color="default" 
              className={classes.button}>
              <div style={{marginLeft:'4px',marginBottom:'2px'}}>Voir tous les avis</div>
              </Button>
            </Link>
        </Grid>
    </div>

    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);



  //    
  //      <Advice
  //      date='12/02/2019'
  //      pseudo='David Cohen'
  //      rating={3}
  //      advice="Ces cours m'ont amener vers une réussite certaine"
  //      />
  //    </Grid>
  //    <Grid item xs={10} sm={6} md={3} style={{marginRight:'20px',marginTop:'20px'}}>
  //      <Advice
  //      date='09/02/2019'
  //      pseudo='Nathan Marciano'
  //      rating={1}
  //      advice=" Ces cours m'ont amener vers une réussite certaine Ces cours m'ont amener vers une réussite certaine"
  //      />
  //    </Grid>
  //    <Grid item xs={10} sm={6} md={3} style={{marginRight:'20px',marginTop:'20px'}}>
  //      <Advice
  //      date='03/02/2019'
  //      pseudo='Willy Zagdhounerie'
  //      rating={4}
  //      advice="Poture Copureur Mange tes morts iosjgpr sitjpr  isjfp if jpszzpo kz^fozpf bkabka bkabk  bkabka abkabka  "
  //      />
  //    </Grid>
  //  </Grid>
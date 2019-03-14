import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Jumbotron from './components/jumbotron.component'
import Pricing from './components/pricing.component'
import pricePicture from './img/pricecourse.jpg';
import MediaQuery from 'react-responsive';

class Prices extends Component {
  render() {
    return (
   
    <div>
     <MediaQuery query="(min-device-width: 850px)">
        <div style={{position: 'relative',
        height:'300px',
        width: '100%',
        overflow: 'hidden'}}>
        <img src={pricePicture} 
           style={{ width: '100%',
            height: 'auto',
            overflow: 'hidden'}}
          />
        </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 850px)">
        <img src={pricePicture} style={{ width: '100%'}}/>
        </MediaQuery>

     	<h1  
        style={{fontFamily:'Dancing Script',fontSize:'50px',textAlign:'center'}}> 
        Tarifs Cours Particuliers à domicile 
        </h1>
        <Grid container direction="row" justify="center">
            <Grid item xs={8} sm={4} md={8}>
                <Pricing
                coursetype="Cours particuliers à domicile"
                adapted="Adapté au rythme de l'élève"
                price="22€/H"
                discover="Nos cours particuliers sont à domicile, dans les locaux ou au domicile du professeur,
                les locaux se situent au 18-26 rue Goubet Paris 75019, pour les déplacements il faut voir avec le professeur directement."
                button="Choisir un cours & Un créneau disponible"
                to="/choiceCourse"
                />
                </Grid>
             </Grid>
                <hr width="30%" style={{marginTop:'30px'}}/>
                <h1  
                id="Offers" 
                style={{fontFamily:'Dancing Script',fontSize:'50px',textAlign:'center'}}> 
                Tarifs Cours Particuliers en Visioconférence 
                </h1>
                <Grid container direction="row" justify="center" >
                <Grid item xs={8} sm={4} md={8}>
                <Pricing
                coursetype="Cours particuliers par Visioconférence"
                adapted="Adapté au rythme de l'élève"
                price="18€/H"
                discover="Les cours particuliers en Visioconférence sont les nouvelles méthodes pour apprendre. Pour pouvoir intéragir 
                vous avec un micro et une écoute ainsi qu'une caméra."
                button="Choisir un cours & Un créneau disponible"
                to="/workOnThisPage"/>
                </Grid>
                 </Grid>
                 <hr width="30%" style={{marginTop:'30px'}}/>
                <h1  
                id="Offers" 
                style={{fontFamily:'Dancing Script',fontSize:'50px',textAlign:'center'}}> 
                Tarifs Cours en Groupes (Stages Intensif) 
                </h1>
                <Grid container direction="row" justify="center">
                <Grid item xs={8} sm={4} md={8}>
                <Pricing
                coursetype="Stage intensif"
                adapted="Adapté au rythme de l'élève"
                price="220€"
                discover="Le prochain stage se déroule du 7 au 23 juin 2019."
                button="Réservez le prochain stage"
                to="/workOnThisPage"/>
                </Grid>
                </Grid>
                <hr width="30%" style={{marginTop:'30px'}}/>
                <h1  
                id="Offers" 
                style={{fontFamily:'Dancing Script',fontSize:'50px',textAlign:'center'}}> 
                Tarifs Cours en Groupes (Visioconférence) 
                </h1>
                <Grid container direction="row" justify="center">
                <Grid item xs={8} sm={4} md={8}>
                <Pricing
                coursetype="Cours particuliers"
                price="10€/H"
                adapted="Adapté au rythme de l'élève"
                discover="Un professeur pour plusieurs élèves pendant une certaine heure avec notre Visioconférence."
                button="Voir les créneaux disponible"
                to="/workOnThisPage"/>
                </Grid>
                </Grid>
        
    </div>
     
    );
  }
}

export default Prices;
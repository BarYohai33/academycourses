import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pricing from '../prices/components/pricing.component'
import { getClasses } from '../../actions/classe';
import { connect } from 'react-redux';

const ChoiceCourse = props => (
<div>
   <Grid container spacing={40}>
      {props.classes.map((value, index) => {
         return (
            <Grid item xs={12} sm={6} md={4}>
               <Pricing
               coursetype={value.name}
               to="/courses"
               discover="Cours en visioconférencee"
               button="Voir les cours"/>
            </Grid>
         )
      })}   
   </Grid>
</div>
)


const mapStateToProps = (state) => ({
   classes: state.classe.classe
 })
 
 export default connect(mapStateToProps, { getClasses })(ChoiceCourse)
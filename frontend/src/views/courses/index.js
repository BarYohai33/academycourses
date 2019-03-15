import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pricing from '../prices/components/pricing.component'
import { getCourses } from '../../actions/course';
import { connect } from 'react-redux';

const Courses = props => (
<div>
   <Grid container spacing={40}>
      {props.courses.map((value, index) => {
         return (
            <Grid item xs={12} sm={6} md={4}>
               <Pricing
               coursetype={value.name}
               to="/dar"
               discover="Cours en visioconférence"
               button="Voir les créneaux"/>
            </Grid>
         )
      })}   
   </Grid>
</div>
)


const mapStateToProps = (state) => ({
   courses: state.course.course
 })
 
 export default connect(mapStateToProps, { getCourses })(Courses)
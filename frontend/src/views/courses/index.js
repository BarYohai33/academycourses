import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pricing from '../prices/components/pricing.component'
import { getCourses } from '../../actions/course';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Courses = props => (
<div>
<h1 style={{textAlign:'center'}}>Choix de la matière</h1>
   <Grid container spacing={40}>
      {props.courses.map((value, index) => {
         return (
            <Grid item xs={12} sm={6} md={4}>
               <Link style={{textDecoration:"none"}}to="/dar"><Button style={{maxWidth: '100%', maxHeight: '70px', minWidth: '100%', minHeight: '70px',backgroundColor:'#d4d8dd',fontSize:'30px'}}>{value.name}</Button></Link>
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
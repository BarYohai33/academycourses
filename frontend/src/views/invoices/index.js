import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getClasses } from '../../actions/classe';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import store from '../../store'
import { updateCurrentCourse } from '../../actions/course'

const Invoice = props => (  
   <div>
   <h1 style={{textAlign:'center'}}> Facture</h1>
      <Grid container spacing={40}>
         <Grid item xs={12} sm={6} md={4}>
         {store.getState().course.currentCourse.price + 
            store.getState().course.currentCourse.course + 
            store.getState().course.currentCourse.classe + 
            store.getState().course.currentCourse.slot}
         </Grid>
      </Grid>
   </div>
)

 
 export default Invoice
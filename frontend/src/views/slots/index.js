import React from 'react';
import Grid from '@material-ui/core/Grid';
import { getSlots } from '../../actions/slot';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import store from '../../store'
import { updateCurrentCourse } from '../../actions/course'

function handleSlot (slot) {
   store.dispatch(updateCurrentCourse({ slot }))
}

const Slots = props => (
<div>
<h1 style={{textAlign:'center'}}>Choix du créneau disponible</h1>
   <Grid container spacing={40}>
      {props.slots.map((value, index) => {
         return (
            <Grid item xs={12} sm={6} md={4}>
               <Link 
               style={{textDecoration:"none"}} to="/payment">
               <Button onClick={handleSlot.bind(this, value.hour)} style={{maxWidth: '100%', maxHeight: '70px', minWidth: '100%', minHeight: '70px',backgroundColor:'#d4d8dd',fontSize:'30px'}}>
               {value.hour+'h' }
               </Button></Link>
            </Grid>
         )
      })}   
   </Grid>
</div>
)


const mapStateToProps = (state) => ({
   slots: state.slot.slot
 })
 
 export default connect(mapStateToProps, { getSlots })(Slots)
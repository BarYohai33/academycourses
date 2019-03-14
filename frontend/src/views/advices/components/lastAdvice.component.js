
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Advice from './advice.component'
import { getLastAdvice } from '../../../actions/advice';
import { connect } from 'react-redux';

function transformDate(date) {
  return new Date(date).toLocaleDateString('fr-FR')
}

const LastAdvice = props => (
    <div>
    {props.messages.map((value, index) => {
      return (
       
          <Advice
          date={transformDate(value.date)}
          pseudo={value.user.lastname + ' ' + value.user.firstname}
          rating={value.rating}
          advice={value.message}
          />
        
      )
    })}
    </div>
)

const mapStateToProps = (state) => ({
  messages: state.advice.messages
})

export default connect(mapStateToProps, { getLastAdvice })(LastAdvice)
/* 
<Grid container direction="row" justify="center">
<Grid key={index} item xs={12} sm={12} md={7} style={{marginTop:'30px'}}>
</Grid>
</Grid> */
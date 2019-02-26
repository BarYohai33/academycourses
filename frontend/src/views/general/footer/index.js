import React, { Component } from 'react'; 
import Typography from '@material-ui/core/Typography';



const Footer = props => (
	<div>
	<hr width="30%" style={{marginTop:'30px'}}/>
       <footer style={{marginTop:'20px'}}>
        <Typography variant="h6" align="center" gutterBottom>
          Académie pour tous
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Les cours de soutien qui relancent la motivation pour l'école
        </Typography>
      </footer>
      </div>
      )

export default Footer;
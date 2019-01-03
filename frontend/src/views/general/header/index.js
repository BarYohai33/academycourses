import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './style';

function ButtonAppBar(props) {
  const { classes } = props;
  // const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}><Link to="/" className={classes.link}>
            Académie pour tous
          </Link></Typography>
          <Link to="/" className={classes.link}><Button color="inherit">Accueil</Button></Link>
          <Button color="inherit">Contact</Button> 
          <Link to="/signup" className={classes.link}><Button color="inherit">Inscription</Button></Link>
          <Link to="/login" className={classes.link}><Button color="inherit">Connexion</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

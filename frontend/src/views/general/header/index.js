import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../../actions/authentication';


class ButtonAppBar extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
    };
  }
  onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }


  render() {
    const { classes } = this.props;
    const {isAuthenticated, user} = this.props.auth;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.colorBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}><Link to="/" className={classes.link}>
              Académie pour tous
            </Link></Typography>
            
            {isAuthenticated ? (
            <div>
            <Link to="/" className={classes.link}><Button color="inherit">Accueil</Button></Link>
            <Link to="/contact" className={classes.link}><Button color="default">Contact</Button></Link>
            <Button color="default" onClick={this.onLogout.bind(this)}>{user.firstname}</Button> 
            </div>
            ) : (
            <div>
            <Link to="/signup" className={classes.link}><Button color="inherit">Inscription</Button></Link>
            <Link to="/login" className={classes.link}><Button color="inherit">Connexion</Button></Link>
            </div>
            )}
            

            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })
(withRouter(withStyles(styles)(ButtonAppBar)));

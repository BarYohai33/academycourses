// React
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// Style
import Style from '../styles/form.style';
const ContactForm = props => (
<div>
    <MediaQuery query="(min-device-width: 850px)">
      <Grid container direction="row" justify="center" alignItems="center" style={{backgroundColor:'#e6e6e6'}}>
          <FormControl>
                <FormControl style={ Style.formHighScreen }>
                <Input
                type="email"
                placeholder="Email"
                name="email"
                />
                </FormControl>
                <FormControl style={ Style.formHighScreen }>
                <Input
                type="message"
                placeholder="Message"
                className="form-control"
                name="message"
                multiline={true}
                rows={3}
                rowsMax={8}
                width={20}
                />
                </FormControl>
                <Button 
                variant="contained" 
                color="primary" 
                style={Style.button} 
                type="submit"
                >
                Envoyer le message 
                </Button> 
        </FormControl>
        
      </Grid>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 850px)">
      <Grid container direction="row" justify="center" alignItems="center">
          <FormControl>
                <FormControl style={ Style.formLittleScreen }>
                <Input
                type="email"
                placeholder="Email"
                name="email"
                />
                </FormControl>
                <FormControl style={ Style.formLittleScreen }>
                <Input
                type="message"
                placeholder="Message"
                className="form-control"
                name="message"
                multiline={true}
                rows={3}
                rowsMax={8}
                width={20}
                />
                </FormControl>
                <Button 
                variant="contained" 
                color="primary" 
                style={Style.button} 
                type="submit"
                >
                Envoyer le message 
                </Button> 
        </FormControl>
        
      </Grid>
    </MediaQuery>
</div>

)
export default ContactForm;
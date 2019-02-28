import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Style from '../styles/advice.style'

class AdviceCreation extends React.Component {

  constructor(props) {
    super(props);
	}

  render() {
    return (
      <FormControl style={ Style.formLittleScreen }>
        <Input
        type="message"
        placeholder="Ajouter un avis"
        className="form-control"
        name="message"
        multiline={true}
        rows={5}
        rowsMax={8}
        width={20}
        />
      </FormControl>
    )
  }
}

export default AdviceCreation;
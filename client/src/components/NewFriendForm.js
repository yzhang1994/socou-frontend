import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
  },
});

class NewFriendForm extends React.Component {
  state = {
    checked: 1,
  };

  handleToggle = value => () => {
    this.setState({
      checked: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state
    return (
        <div style={{ padding: 16, paddingBottom: 32, width: '100%' }}>
          <TextField fullWidth label="Hashgraph Address" />
        </div>
    );
  }
}

NewFriendForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewFriendForm);

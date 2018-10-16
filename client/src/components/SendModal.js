import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FriendList from './FriendList';
import NewFriendForm from './NewFriendForm';

const styles = theme => ({
  paper: {
    top: '25%',
    position: 'absolute',
    margin: 'auto',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SimpleModal extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, isModalOpen } = this.props;
    const { value } = this.state
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isModalOpen}
        onClose={this.handleClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className={classes.paper}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab icon={<FavoriteIcon />} label="Friends List" />
            <Tab icon={<PersonPinIcon />} label="Add New Friend" />
          </Tabs>

          <Typography variant="h5" id="modal-title" style={{ padding: 16 }}>
            { value === 0 ? 'Send this coupon to your friend!' : 'Send this coupon to a new friend!' }
          </Typography>
          { value === 0 ? <FriendList /> : <NewFriendForm /> }
          <Button variant="contained" color="primary" size="large">Send</Button>
        </div>
      </Modal>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped

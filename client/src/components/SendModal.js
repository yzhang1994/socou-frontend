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
import TextField from '@material-ui/core/TextField';
import NewFriendForm from './NewFriendForm';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

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
  media: {
    // height: 0,
    // paddingTop: '100%',
    backgroundSize: 'auto',
    backgroundColor: 'white'
  },
});

class SimpleModal extends Component {
  state = {
    value: 0,
    input: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    const { action, classes, isModalOpen, openModal, tabIndex } = this.props;
    const { input, value } = this.state
    const onSend = () => {
      action(input)
      openModal(false)()
    }
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isModalOpen}
        onClose={openModal(false)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
      <Fragment>
          { tabIndex === 0
            ? (
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
                  { value === 0 ? 'Give this coupon to your friend!' : 'Give this coupon to a new friend!' }
                </Typography>
                { value === 0
                  ? <FriendList />
                  : (
                  <div style={{ padding: 16, paddingBottom: 32, width: '100%' }}>
                    <TextField onChange={this.handleInputChange} fullWidth label="Hashgraph Address" />
                  </div>
                  )
                }
                <Button variant="contained" color="primary" size="large" onClick={onSend} styles={{ paddingTop: 32 }}>
                  Give
                </Button>
              </div>
            )
            : (
              <div onClick={onSend} style={{ width: 300, height: 300 }}>
                <img
                  className={classes.media}
                  src="/static/images/QR.png"
                  title="QR CODE"
                  height={300}
                  width={300}
                />
              </div>
            )
          }
        </Fragment>
      </Modal>
    );
  }
}

SimpleModal.propTypes = {
  action: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FriendsItem from './FriendsItem';

const styles = {
  root: {
    width: 900,
    margin: '8px auto',
  },
};

class Friends extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={8} className={classes.root} >
        <Grid item xs={12}>
          <FriendsItem />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem />
        </Grid>
      </Grid>
    );
  }
}

Friends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Friends);

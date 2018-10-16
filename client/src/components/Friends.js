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
          <FriendsItem
            person={1}
            eventText="loves See's Candy"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={2}
            eventText="received a coupon for Alexander's Steakhouse"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={6}
            eventText="received a coupon for Shake Shack"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={4}
            eventText="loves Fry's Electronics"
            timeText="Yesterday"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={3}
            eventText="received a coupon for Home Depot"
            timeText="Yesterday"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={5}
            eventText="received a coupon for Home Depot"
            timeText="Yesterday"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={6}
            eventText="loves PetSmart"
            timeText="2 days ago"
          />
        </Grid>
        <Grid item xs={12}>
          <FriendsItem
            person={4}
            eventText="received a coupon for Dyson"
            timeText="2 days ago"
          />
        </Grid>
      </Grid>
    );
  }
}

Friends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Friends);

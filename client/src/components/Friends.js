import React from 'react';

import Grid from '@material-ui/core/Grid';
import FriendsItem from './FriendsItem';

class Friends extends React.Component {
  render() {
    return (
      <Grid container spacing={8}>
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

export default Friends;

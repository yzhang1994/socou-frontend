import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Coupon from './Coupon';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '32px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const CouponGrid = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Coupon />
      </Grid>
    </Grid>
  </div>
);

CouponGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CouponGrid);

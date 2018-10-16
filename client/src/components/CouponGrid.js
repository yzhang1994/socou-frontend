import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Coupon from './Coupon';
import { SEED_DATA } from '../seed-data';

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

const CouponGrid = ({ classes, openModal }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      {SEED_DATA.map(({
        date,
        description,
        offer,
        title,
      }, i) => (
        <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
          <Coupon
            date={date}
            description={description}
            offer={offer}
            title={title}
            onClickCoupon={openModal(true)}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

CouponGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withStyles(styles)(CouponGrid);

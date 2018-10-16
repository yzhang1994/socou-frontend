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

const CouponGrid = ({ classes, coupons, openModal, setSelectedCouponId, tabIndex }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      {coupons && coupons.map((coupon, i) => {
        if (tabIndex === 0 && coupon.usable === true) return
        if (tabIndex === 1 && coupon.usable === false) return
        const onClickCoupon = () => {
          setSelectedCouponId(coupon.couponId)()
          openModal(true)()
        }
        return (
          <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
            <Coupon
              coupon={coupon}
              onClickCoupon={onClickCoupon}
              tabIndex={tabIndex}
            />
          </Grid>
        )
      })}
    </Grid>
  </div>
);

CouponGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  coupons: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  setSelectedCouponId: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

CouponGrid.defaultProps = {
  tabIndex: 0,
  coupons: null,
}

export default withStyles(styles)(CouponGrid);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteOutlined from '@material-ui/icons/FavoriteBorder';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FriendAvatars from './FriendAvatars';

const styles = theme => ({
  card: {
    // maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    width: '100px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  brandName: {
    fontSize: "1.2em",
  },
  loveButton: {
    float: "left",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.2)",
    margin: "4px",
    padding: "8px",
  },
  flexContainer: {
    display: "flex",
  },
  content: {
    flex: 1,
  },
  offer: {
    float: 'right',
    fontSize: '0.8em',
    color: 'grey',
    lineHeight: '28px',
  }
});

class CouponCard extends Component {
  state = { expanded: false };

  render() {
    const {
      classes,
      coupon,
      onClickCoupon,
      tabIndex,
    } = this.props;

    const {
      discount,
      imageUrl,
      merchant,
      usable,
      used,
    } = coupon

    return (
      <Card className={classes.card}>
        <IconButton className={classes.loveButton}>
          <FavoriteOutlined />
        </IconButton>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageUrl}
        >
        </CardMedia>
        <div className={classes.flexContainer}>
          <CardContent className={classes.content}>
            <Typography component="p" className={classes.offer}>
              { tabIndex === 0 ? '??' : discount } % OFF
            </Typography>
            <Typography className={classes.brandName}>{merchant}</Typography>
            <FriendAvatars people={[1, 4, 5]}/>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            {/* <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton> */}
            <Button variant="contained" color="primary" onClick={onClickCoupon}>
              Send
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}

CouponCard.propTypes = {
  classes: PropTypes.object.isRequired,
  coupon: PropTypes.object,
  onClickCoupon: PropTypes.func.isRequired,
};

CouponCard.defaultProps = {
  coupon: null,
}

export default withStyles(styles)(CouponCard);

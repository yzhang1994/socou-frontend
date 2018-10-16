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
  }
});

class CouponCard extends Component {
  state = { expanded: false };

  render() {
    const {
      classes,
      date,
      description,
      offer,
      title,
      onClickCoupon,
    } = this.props;

    return (
      <Card className={classes.card}>
        <IconButton className={classes.loveButton}>
          <FavoriteOutlined />
        </IconButton>
        <CardMedia
          className={classes.media}
          image="/static/images/paella.jpg"
          title="paella"
        >
        </CardMedia>
        <CardContent>
          <Typography className={classes.brandName}>{title}</Typography>
          <Typography component="p">
            { offer }
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <Button variant="contained" color="primary" onClick={onClickCoupon}>
            Send
          </Button>
        </CardActions>
      </Card>
    );
  }
}

CouponCard.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  offer: PropTypes.string,
  title: PropTypes.string,
  onClickCoupon: PropTypes.func.isRequired,
};

CouponCard.defaultProps = {
  date: 'November 1, 2018',
  description: 'Some BS here',
  offer: '??% off your next instore purchase',
  title: 'Target',
}

export default withStyles(styles)(CouponCard);

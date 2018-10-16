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
import FavoriteIcon from '@material-ui/icons/Favorite';
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
});

class CouponCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

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
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     { title && title.substr(0, 1) }
          //   </Avatar>
          // }
          title={title}
          subheader={`Expires on ${date}`}
          action={
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          image="/static/images/paella.jpg"
          title="paella"
        />
        <CardContent>
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
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{ description }</Typography>
          </CardContent>
        </Collapse>
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

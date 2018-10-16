import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  timestamp: {
    float: 'right',
    color: 'grey',
  },
  content: {
    display: 'flex',
  },
  flexLeft: {
    width: '100px',
  },
  flexRight: {
    flex: 1,
  },
  friendImage: {
    width: '64px',
    height: '64px',
  },
  title: {
    fontSize: '1.2em',
    marginBottom: '0.5em',
  },
};

const names = [
  '',
  'Carlo Las Marias',
  'Katrina Guillen',
  'Martin Kou',
  'Michael Feng',
  'Yingdan Liang',
  'Yvonne Zhang',
];


class FriendsItem extends React.Component {
  render() {
    const { classes } = this.props;
    const name = names[this.props.person];

    return (
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.flexLeft}>
            <Avatar
              src={`static/images/p${this.props.person}.jpg`}
              className={classes.friendImage}
            />
          </div>
          <div className={classes.flexRight}>
            <Typography className={classes.timestamp}>Today</Typography>
            <Typography className={classes.title}>{name}</Typography>
            <Typography>{name} {this.props.eventText}.</Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

FriendsItem.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.number.isRequired,
  eventText: PropTypes.string.isRequired,
};

export default withStyles(styles)(FriendsItem);

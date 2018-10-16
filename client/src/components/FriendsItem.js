import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
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

const levels = [
  null,
  'Giver',
  'Philanthropist',
  'Santa Claus',
];


class FriendsItem extends React.Component {

  render() {
    const { classes } = this.props;
    const name = names[this.props.person];
    const timeText = this.props.timeText;
    const giverLevel = (name.charCodeAt(0) + name.charCodeAt(1)) % levels.length;
    const giverTag = levels[giverLevel];
    const giverChip = (giverTag !== null ?
      <Chip label={giverTag} color="primary" /> : null);

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
            <Typography className={classes.timestamp}>{timeText}</Typography>
            <Typography className={classes.title} component="div">
              {name}
              &nbsp;&nbsp;
              {giverChip}
            </Typography>
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
  timeText: PropTypes.string,
};

FriendsItem.defaultProps = {
  timeText: 'Today',
};

export default withStyles(styles)(FriendsItem);

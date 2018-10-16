import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    float: 'left',
    margin: '0 8px 0 0',
    width: '32px',
    height: '32px',
  },

  avatarContainer: {
    lineHeight: '32px',
  },
};


class FriendAvatars extends React.Component {
  render() {
    const { classes } = this.props;

    const avatars = this.props.people.map(value => (
      <Avatar
        alt="Person"
        src={`/static/images/p${value}.jpg`}
        className={classes.avatar}
        key={`avatar-${value}`}
      />
    ));

    return (
      <div>
        {avatars}
        <Typography className={classes.avatarContainer}>
          {this.props.text}
        </Typography>
      </div>
    );
  }
}

FriendAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  people: PropTypes.arrayOf(PropTypes.number).isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(FriendAvatars);

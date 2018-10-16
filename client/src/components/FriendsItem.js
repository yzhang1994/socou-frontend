import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  timestamp: {
    float: "right",
    color: "grey",
  }
};


class FriendsItem extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardContent>
          <Typography className={classes.timestamp}>Today</Typography>
          <Typography>Pikachu</Typography>
          <Typography>Pikachu loves See&apos;s Candy Store.</Typography>
        </CardContent>
      </Card>
    );
  }
}

FriendsItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FriendsItem);

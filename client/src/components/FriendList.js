import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: 1,
  };

  handleToggle = value => () => {
    this.setState({
      checked: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state
    return (
      <div className={classes.root}>
        <List>
          {[1, 2, 3, 4, 5, 6].map(value => (
            <ListItem key={value} dense button className={classes.listItem}>
              <Avatar alt="Person" src={`/static/images/p${value}.jpg`} />
              <ListItemText primary={`Person ${value}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(value)}
                  checked={checked === value}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);

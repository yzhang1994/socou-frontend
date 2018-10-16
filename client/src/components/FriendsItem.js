import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class FriendsItem extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h3">
            Friend&apos;s name here
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default FriendsItem;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Avatar, Typography } from '@material-ui/core';
import styles from './styles';
import { withRouter } from 'react-router-dom';
import Gravatar from 'react-gravatar';

function convertDate(date) {
  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString([], options);
}

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia className={classes.media} image={item.imageurl} />
        <div className={classes.profileData}>
          <Avatar className={classes.avatarImage}>
            {item.itemowner.email ? (
              <Gravatar email={item.itemowner.email} />
            ) : (
              <Gravatar email="" />
            )}
          </Avatar>
          <Typography>
            <p className={classes.itemOwner}>{item.itemowner.fullname}</p>
            <p className={classes.itemCreateDate}>
              {convertDate(item.created)}
            </p>
          </Typography>
        </div>
        <CardContent>
          <Typography gutterBottom component="h2" className={classes.itemTitle}>
            {item.title}
          </Typography>
          <Typography className={classes.itemTags}>
            {item.tags.map(tag => tag.title).join(', ')}
          </Typography>
          <Typography className={classes.itemDescription} component="p">
            {item.description}
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button
          className={classes.itemBorrowButton}
          variant="outlined"
          size="medium"
        >
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

ItemsCard.defaultProps = {
  imageurl: 'http://via.placeholder.com/350x250?text=Please select an image',
  title: 'Name your item.',
  description: 'Describe your item.',
  tags: [],
  itemowner: {},
  created: new Date()
};

export default withRouter(withStyles(styles)(ItemsCard));

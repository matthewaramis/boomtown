import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const ItemsCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia className={classes.media} image={item.imageurl} />
        <CardContent>
          <Typography gutterBottom component="h2">
            {item.title}
          </Typography>
          <Typography component="p">{item.description}</Typography>
          <Typography>{item.tags.map(tag => tag.title).join(', ')}</Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button size="small" color="primary">
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
  title: 'Name your item',
  description: 'Describe your item',
  tags: [],
  itemowner: {},
  created: new Date()
};

export default withStyles(styles)(ItemsCard);

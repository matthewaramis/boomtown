import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import { Grid } from '@material-ui/core';

const Share = ({ classes, tags }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <ShareItemPreview />
      </Grid>
      <Grid item xs={6}>
        <ShareItemForm classes={classes} tags={tags} />
      </Grid>
    </Grid>
  );
};

export default Share;

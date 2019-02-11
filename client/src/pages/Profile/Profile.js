import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import ItemCard from '../../components/ItemCard/ItemCard';

const Profile = ({ classes, profile }) => {
  return (
    <div>
      <div className={classes.profileBody}>
        <Card className={classes.profileCard}>
          <Typography className={classes.profileUserText}>
            {profile.fullname}
          </Typography>
          <Typography className={classes.itemShareBorrowText}>
            <span className={classes.itemCount}>{profile.items}</span> Items
            shared <span className={classes.itemCount}>{profile.borrowed}</span>{' '}
            Items borrowed
          </Typography>
        </Card>
      </div>

      <div>
        <Grid className={classes.grid} container spacing={24}>
          {profile.items.map(item => {
            return (
              <Grid
                item
                key={item.id}
                xs={12}
                sm={6}
                md={4}
                className={classes.gridItem}
              >
                <ItemCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Profile;

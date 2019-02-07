import React from 'react';
import { Card, Typography } from '@material-ui/core';

const Profile = ({ classes, profile }) => {
  console.log('pro', profile);
  return (
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
  );
};

export default Profile;

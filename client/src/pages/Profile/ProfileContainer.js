import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';

class ProfileContainer extends Component {
  render() {
    return (
      <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: 1 }}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error :( ${error.message}`}</p>;

          console.log(data);
          return <Profile classes={this.props.classes} profile={data.user} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ProfileContainer);

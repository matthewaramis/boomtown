import React, { Component } from 'react';
import Share from './Share';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { ADD_ITEM_MUTATION, ALL_TAGS_QUERY } from '../../apollo/queries';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Mutation, Query } from 'react-apollo';

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Share classes={this.props.classes} tags={data.tags} />;
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(ShareContainer);

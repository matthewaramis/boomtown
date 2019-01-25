import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class FullScreenLoader extends Component {
  render() {
    return <p>Loading...</p>;
  }
}
export default withStyles(styles)(FullScreenLoader);

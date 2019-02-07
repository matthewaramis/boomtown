import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link, withRouter } from 'react-router-dom';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
  MoreVert,
  Fingerprint,
  AddCircle,
  PowerSettingsNew
} from '@material-ui/icons';
import { LOGOUT_MUTATION, VIEWER_QUERY } from '../../apollo/queries';
import { graphql, compose } from 'react-apollo';
import boomtownLogo from '../../images/boomtown.svg';

class HeaderBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              href="/items"
            >
              <img src={boomtownLogo} width="40" />
            </IconButton>
            <div className={classes.grow} />
            <Button className={classes.shareButton} href="/share">
              <Typography
                variant="contained"
                className={classes.shareButtonText}
                color="inherit"
                href="/share"
              >
                <AddCircle /> Share Something
              </Typography>
            </Button>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MoreVert />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={this.handleClose}
                    component={Link}
                    to="/profile"
                  >
                    <Fingerprint />Profile
                  </MenuItem>
                  <MenuItem
                    onClick={e => {
                      e.preventDefault();
                      this.props.logoutMutation({});
                    }}
                  >
                    <PowerSettingsNew />Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const refetchQueries = [
  {
    query: VIEWER_QUERY
  }
];
export default compose(
  graphql(LOGOUT_MUTATION, {
    options: {
      refetchQueries
    },
    name: 'logoutMutation'
  }),
  withStyles(styles),
  withRouter
)(HeaderBar);

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Profile from '../pages/Profile';
import Share from '../pages/Share';

//Add Menu Components
export default () => (
  <Fragment>
    <Switch>
      <Route path="/welcome" component={Home} />

      <Route path="/items" component={Items} />
      <Route path="/profile" component={Profile} />
      <Route path="/share" component={Share} />
      <Redirect to="/Items" />
    </Switch>

    {/**
     * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
     *
     * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
     *
     * Later, we'll add logic to send users to one set of routes if they're logged in,
     * or only view the /welcome page if they are not.
     */}
  </Fragment>
);

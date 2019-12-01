/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import OrganizationPage from 'containers/OrganizationPage/Loadable';
import OrganizationsPage from 'containers/OrganizationsPage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import EventPage from 'containers/EventPage/Loadable';

import Sidebar from 'containers/Sidebar';
import Topbar from 'containers/Topbar';

import Footer from 'components/Footer';
import Wrapper from 'components/Wrapper';

import GlobalStyle from '../../global-styles';

import { makeSelectSocketStatus } from './selectors';

function App(props) {

  // Alternative View if Backend is not connected. 
  // if(!props.serverStatus)
  //   return (
  //     <p>Error, Backend is not connected or not working.</p>
  //   )

  return (
    <Sidebar>
      <Topbar />
      <Wrapper className="app-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/org" component={OrganizationsPage} />
          <Route exact path="/org/:id" component={OrganizationPage} />
          <Route exact path="/event/:id" component={EventPage} />
          <Route exact path="/profile/:id" component={UserPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Wrapper>
      <GlobalStyle />
      <Footer />
    </Sidebar>
  );
}

const mapStateToProps = createStructuredSelector({
    serverStatus: makeSelectSocketStatus(),
})
export function mapDispatchToProps(dispatch) {
  return {}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(App)
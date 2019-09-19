/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';

import Sidebar from 'containers/Sidebar';
import Topbar from 'containers/Topbar';
import Footer from 'components/Footer';
import Wrapper from 'components/Wrapper';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
      <Sidebar>
        <Topbar />
        <Wrapper>        
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Wrapper>
        <GlobalStyle />
        <Footer />
      </Sidebar>
    );
}
   
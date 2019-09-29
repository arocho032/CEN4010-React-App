/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import CenteredWrapper from 'components/CenteredWrapper'
import { Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import messages from './messages';

export default function NotFound() {
  return (
    <CenteredWrapper vertical>
    	<Header as='h1'>404</Header>
      	<FormattedMessage {...messages.header} /><br/>
      	<Link to='/'>
      		<FormattedMessage {...messages.return}/>
      	</Link>
    </CenteredWrapper>
  );
}

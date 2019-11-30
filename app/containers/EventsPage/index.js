import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Menu, Input } from 'semantic-ui-react'

import Banner from 'components/Banner';
import EventsView from 'components/EventsView';

function EventsPage(props) {
	return(
		<div>
  			<Banner header="Events" compact={true}/>
  			<Menu secondary>
  				<Menu.Item header>Search Events</Menu.Item>
  				<Menu.Item>
  					<Input icon='search'/>
  				</Menu.Item>
  			</Menu>
              <EventsView header="All Events" events={[]} hasMap={true}/>
		</div>
    );	
}

const mapStateToProps = createStructuredSelector({})

export function mapDispatchToProps(dispatch) {
	return {}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EventsPage)

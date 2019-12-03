import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Menu, Segment } from 'semantic-ui-react';

import Banner from 'components/Banner';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Map from 'containers/Map';

import { makeSelectCurUser } from '../App/selectors'

import { makeSelectPageState, makeSelectPageContent } from './selectors';
import { setPageStateLoaded, requestEvent, attendEvent } from './actions';


function EventPage(props) {

	if( !props.pageState.isLoaded  && process.env.CERT
		|| (props.event != null && props.event.event_id.toString() != props.location.pathname.split('/')[2])) {
			props.load(props.location.pathname.split('/')[2])
			props.setLoaded(true);
	}        

	if(props.event == null)
		return(<NotFoundPage/>);	

	var loggedUserView = (<br/>)
	if(props.curUser)
		loggedUserView = 
		(
			<Menu secondary>
				<Menu.Item onClick={() => {props.doAttendEvent(props.event.event_id, props.curUser.numId)}}>Attend This Event</Menu.Item>
			</Menu>
		);

	return (
		<div>
			<Banner compact header={props.event.name} subheader={props.event.description}></Banner>
			{loggedUserView}
			<Segment>
				<span>When: {props.event.date} at {props.event.time}</span><br/>
				<span>Where: </span>
				<Map events={[props.event]}/>					
			</Segment>
		</div>
	)

}

const mapStateToProps = createStructuredSelector({
    curUser: makeSelectCurUser(),
	pageState: makeSelectPageState(),
	event: makeSelectPageContent(),
})

export function mapDispatchToProps(dispatch) {
	return {
		setLoaded:	() => dispatch(setPageStateLoaded(true)),
		load: (event_id) => dispatch(requestEvent(event_id)),
		doAttendEvent: (event_id, user_id) => dispatch(attendEvent(event_id, user_id))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(EventPage)
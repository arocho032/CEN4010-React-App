import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation, makeSelectUser} from './selectors'
import { makeSelectCurUser} from '../App/selectors'

import { Segment, Grid, Icon, Card, Menu, Input, Button} from 'semantic-ui-react'

import Banner from 'components/Banner';
import EventsView from 'components/EventsView';
import OrganizationsView from 'components/OrganizationsView'

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import EditProfileModal from './EditProfileModal'

function UserPage(props) {
	if(props.user == null)
		return (<NotFoundPage/>) 
	else {
		var loggedUserViews = (<br/>)
		if(props.curUser && props.curUser.id == props.user.id) {
			loggedUserViews = (
				<Grid.Row>
					<EditProfileModal/>
				</Grid.Row>
			)
		} 
		return (
			<div>
				<Banner header={"Homepage of " + props.user.name} compact={true}/>
				<Segment className="tempSegment" vertical>
					<Grid columns={3} textAlign='center'>
						<Grid.Row>
							<Grid.Column>
								<Grid.Row>
									<Icon name='user outline' size="massive"/>
									<br/>
								</Grid.Row>
								{loggedUserViews}
							</Grid.Column>
							<Grid.Column textAlign='left'> 
								<Grid.Row>
									<br/>
									<span><b>Username: </b>{props.user.id}</span><br/>
									<span><b>Name: </b>{props.user.name}</span><br/>
									<span><b>Email: </b>{props.user.email}</span><br/>
									<span><b>Phone Number: </b>{props.user.phoneNum}</span><br/>
									<span><b>Private Account: </b>{props.user.priv ? 'Yes' : 'No'}</span><br/>
									<span><b>Date of Birth: </b>{props.user.dob}</span>
								</Grid.Row>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={1}>
							<EventsView header="Attended Events" events={props.events} hasMap={false}/>
						</Grid.Row>
						<Grid.Row columns={1}>
							<Grid.Column>
								<OrganizationsView header="Member in:" orgs={props.orgs} compact={false} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		)
	}

}

const mapStateToProps = createStructuredSelector({
	location: makeSelectLocation(),
	user: makeSelectUser(),
	curUser: makeSelectCurUser(),
	orgs: () => [],
	events: () => [],
})
export function mapDispatchToProps(dispatch) {
	return {
		none: () => null
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UserPage)
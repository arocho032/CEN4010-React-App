import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectPageState, makeSelectPageUser, makeSelectOrgs, makeSelectEvents } from './selectors'
import { makeSelectCurUser} from '../App/selectors'

import { setLoaded, requestUser, loadOrganizations } from './actions'

import { Segment, Grid, Icon } from 'semantic-ui-react'

import Banner from 'components/Banner';
import EventsView from 'components/EventsView';
import OrganizationsView from 'components/OrganizationsView'

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import EditProfileModal from './EditProfileModal'

function UserPage(props) {

	if(!props.pageState.isLoaded  && process.env.CERT
		|| (props.user == null || (props.user.user_name != props.location.pathname.split('/')[2]))) {
		props.load(props.location.pathname.split('/')[2]);
		if(props.user != null) {
			props.onLoadOrganizations(props.user.user_id)
			props.setLoadedTrue();	
		}
	}
	


	console.log(props)

	if(props.user == null)
		return (<NotFoundPage/>)
	else {
		var loggedUserViews = (<br/>)
		if(props.curUser && props.curUser.id == props.user.user_name) {
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
									<span><b>Username: </b>{props.user.user_name}</span><br/>
									<span><b>Name: </b>{props.user.name}</span><br/>
									<span><b>Email: </b>{props.user.email}</span><br/>
									{/* <span><b>Phone Number: </b>{props.user.phoneNum}</span><br/> */}
									<span><b>Private Account: </b>{props.user.priv ? 'Yes' : 'No'}</span><br/>
									{/* <span><b>Date of Birth: </b>{props.user.dob}</span> */}
								</Grid.Row>
							</Grid.Column>
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
	curUser: makeSelectCurUser(),
	user: makeSelectPageUser(),
	pageState: makeSelectPageState(),
	orgs: makeSelectOrgs(),
})
export function mapDispatchToProps(dispatch) {
	return {
		load: (username) => dispatch(requestUser(username)),
		setLoadedTrue: () => dispatch(setLoaded(true)),
		onLoadOrganizations: (user_id) => dispatch(loadOrganizations(user_id))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(UserPage)
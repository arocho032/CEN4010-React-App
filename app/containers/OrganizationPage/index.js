import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Banner from 'components/Banner';
import EventsView from 'components/EventsView';
import UsersView from 'components/UsersView';
import ControlBar from './ControlBar';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { makeSelectCurUser } from '../App/selectors'
import { makeSelectPageState, makeSelectPageOrg, makeSelectEvents, makeSelectMembers } from './selectors';
import { requestOrganization, requestEvents, requestMembers, joinOrganization} from './actions'

import { Menu } from 'semantic-ui-react';

function OrganizationPage(props) {
    
    console.log(props)
    if(props.org == null || (props.org.organization_id.toString() != props.location.pathname.split('/')[2])) {
        props.load(props.location.pathname.split('/')[2])
        props.loadMembers(props.location.pathname.split('/')[2], 0)
        props.loadEvents(props.location.pathname.split('/')[2], 0)
    }

    if(props.org == null)
        return (<NotFoundPage/>)
    else {
        var loggedUserView = (<br/>)
        if(props.curUser && props.members.filter(member => member.user_name == props.curUser.id).length != 0) 
        {
            loggedUserView = (
                <ControlBar events={props.events} members={props.members} org={props.org}/>
            )
        } else if (props.curUser && props.members.filter(member => member.user_name == props.curUser.id).length == 0) {
            loggedUserView = (
                <Menu secondary>
                    <Menu.Item onClick={() => props.doJoinOrganization(props.curUser.id, props.org.organization_id)}>Join this Organization</Menu.Item>
                </Menu>
            )
        }
        return (
            <div>
                <Banner header={props.org.name} subheader={props.org.desc} compact={true}/>
                {loggedUserView}                
                <UsersView header="Members:" users={props.members}/>
                <EventsView header="Upcoming Events by this Organization" events={props.events} hasMap={true}/>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    curUser: makeSelectCurUser(),
    org: makeSelectPageOrg(),
	pageState: makeSelectPageState(),
    members: makeSelectMembers(),
    events: makeSelectEvents(),
})

export function mapDispatchToProps(dispatch) {
	return {
        load: (organization_id) => dispatch(requestOrganization(organization_id)),
        loadMembers:  (organization_id, startIndex) => dispatch(requestMembers(organization_id, startIndex)),
        loadEvents:  (organization_id, startIndex) => dispatch(requestEvents(organization_id, startIndex)),
        setLoadedTrue: () => dispatch(setLoaded(true)),
        doJoinOrganization: (username, orgId) => dispatch(joinOrganization(username, orgId)),
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(OrganizationPage)
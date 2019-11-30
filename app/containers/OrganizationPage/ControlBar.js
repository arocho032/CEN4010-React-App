import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Menu, Icon, Dropdown, Popup, Form, Input, Button} from 'semantic-ui-react';

import CreateEventModal from './CreateEventModal';
import CreateRoleModal from './GrantRolesModal';
import CancelEventModal from './CancelEventModal';

function CotrolBar(props) {
	return(
		<Menu secondary>
            <Dropdown item text="Organization">
                <Dropdown.Menu>
                        <Dropdown.Header>Oganization Control Options</Dropdown.Header>
                        <Dropdown.Item>Delete Organization</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Events">
                <Dropdown.Menu>
                    <Dropdown.Header>Event Control Options</Dropdown.Header>
                    <CreateEventModal />
                    <CancelEventModal events={props.events} />
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Users">
                <Dropdown.Menu>
                    <Dropdown.Header>User Control Options</Dropdown.Header>
                    <CreateRoleModal members={props.members} org={props.org}/>
                </Dropdown.Menu>
            </Dropdown>
		</Menu>
    );	
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
	return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CotrolBar)
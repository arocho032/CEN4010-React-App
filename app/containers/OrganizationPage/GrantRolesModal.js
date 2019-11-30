import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Modal, Header, Form, Input, Button, Checkbox, Dropdown } from 'semantic-ui-react'

import { makeSelectModalOpen, makeSelectTempGrantRole } from './selectors'
import { grantRole, modalStateOpen, onInputChange } from './actions'

const privileges = [
	{value: 1, text: "privilege to kick users", key: "KICK"  },
	{value: 2, text: "privilege to invite users", key: "INVITE"  },
	{value: 3, text: "privilege to manage events", key: "MANAGE EVENTS"  },
	{value: 4, text: "privilege to manage roles", key: "MANAGE ROLES"  },
	{value: 5, text: "privilege to promote users", key: "PROMOTE"  },
	{value: 6, text: "Default user privileges", key: "DEFAULT" },
]

function CreateRoleModal(props) {

	var userOptions = props.members.map((member, index) => {return {value: member.user_id, text: member.user_name, key: member.user_id}})

	return(
		<Modal  trigger={<Dropdown.Item onClick={props.onOpen}>Grant Roles</Dropdown.Item>}
				open={props.modalOpen}
				onClose={props.onClose}
			>
			<Modal.Header>New Event Form</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Header>Grant Rules</Header>
					<p>Please select the User and Role to be applied</p>
					<Form onSubmit={() => props.onSubmit(props.tempGrantRole.targetUser, props.tempGrantRole.targetPriv, props.org.organization_id)}>
						<Form.Field>
							<label>User:</label>
							<Dropdown 
								search 
								onChange={props.onHandleChange}
								options={userOptions}
								placeholder="Select..."
								value={props.tempGrantRole.targetUser}
								name="targetUser"
					            selection
							/>
						</Form.Field>
						<Form.Field>
							<label>Event Type:</label>
							<Dropdown 
								search 
								onChange={props.onHandleChange}
								options={privileges}
								placeholder="Select..."
								value={props.tempGrantRole.targetPriv}
								name="targetPriv"
					            selection
							/>
						</Form.Field>
						<Button.Group floated='right' attached={false}>
							<Button type='submit'>Submit</Button>
							<Button type='cancel' onClick={props.onClose}>Cancel</Button>
						</Button.Group>
					</Form>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
}

const mapStateToProps = createStructuredSelector({
	modalOpen: makeSelectModalOpen("rolesModalOpen"),
    tempGrantRole: makeSelectTempGrantRole(),
})

export function mapDispatchToProps(dispatch) {
	return {
		onSubmit: (targetUser, targetPriv, organization_id) => dispatch(grantRole(targetUser, targetPriv, organization_id)),
		onClose:  () => dispatch(modalStateOpen("rolesModalOpen", false)),
		onOpen:   () => dispatch(modalStateOpen("rolesModalOpen", true)),
        onHandleChange: (e, {name, value, checked}) => dispatch(onInputChange(name, "tempGrantRole", value, checked)),
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CreateRoleModal)


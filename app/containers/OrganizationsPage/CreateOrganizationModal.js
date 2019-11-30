import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Modal, Header, Form, Input, Button, Image, Checkbox, Dropdown } from 'semantic-ui-react'

import default_image from './gc-1.jpg'

import { makeSelectModalOpen, makeSelectTempOrg} from './selectors'
import { addOrganization, modalStateOpen, onInputChange } from './actions'
import { makeSelectCurUser } from '../App/selectors';

const requirementsOptions = [
	{key:'none', text:'None.', value:'none'},
	{key:'studentid', text:'Provide Student ID.', value:'studentid'},
]

function CreateOrganizationModal(props) {
	if(props.curUser == null)
		return (<p>Log in to Create Organizations</p>)
	return(
		<Modal  trigger={<Button onClick={props.onOpen}>Create New Organization</Button>}
				open={props.modalOpen}
				onClose={props.onClose}
			>
			<Modal.Header>New Organization Form</Modal.Header>
			<Modal.Content image>
				<Image wrapped size='large' src={default_image} />
				<Modal.Description>
					<Header>Organization Details</Header>
					<p>Please input the following information about your organization:</p>
					<Form onSubmit={() => props.onSubmit(props.tempOrg)}>
						<Form.Field>
							<label>Name:</label>
							<Input 
								name="name"
								value={props.tempOrg.name} 
								onChange={props.onHandleChange}
								placeholder="The name of your organization..." 
							/>
						</Form.Field>
						<Form.Field>
							<label>Description:</label>
							<Input 
								name="description"
								value={props.tempOrg.description} 
								onChange={props.onHandleChange}
								placeholder="What your organization does..." 
							/>
						</Form.Field>
						<Form.Field>
							<label>Requiements for Joining:</label>
							<Dropdown 
								search 
								onChange={props.onHandleChange}
								options={requirementsOptions}
								placeholder="Select..."
								value={props.tempOrg.requirements}
								name="requirements"
					            selection
							/>
						</Form.Field>
						<Form.Field>
							<label>Privacy Settings:</label>
							<Checkbox 
								name="privacy"
								checked={props.tempOrg.privacy == "PRIVATE"}
								label="Make my Organization Private."
								onChange={props.onHandleChange}
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
	modalOpen: makeSelectModalOpen(),
	tempOrg: makeSelectTempOrg(),
	curUser: makeSelectCurUser(),
})

export function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: (values) => dispatch(addOrganization(values)),
		onClose:  () => dispatch(modalStateOpen(false)),
		onOpen:   () => dispatch(modalStateOpen(true)),
		onHandleChange: (e, {name, value, checked}) => dispatch(onInputChange(name, value, checked)),
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CreateOrganizationModal)


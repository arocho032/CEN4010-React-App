import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Modal, Header, Form, Input, Button, Image, Checkbox, Dropdown } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

import { makeSelectModalOpen, makeSelectTempUserChanges, makeSelectPageState } from './selectors'
import { modalLoad, modalKill, onInputChange, } from './actions'

import { makeSelectCurUser, makeSelectPasswordField } from '../App/selectors'
import { attemptUserChange } from '../App/actions'

const requirementsOptions = [
	{key:'none', text:'None.', value:'none'},
	{key:'studentid', text:'Provide Student ID.', value:'studentid'},
]

function makeInputField(label, name, value, onChange, isPasswordField) {
	return(
		<Form.Field>
			<label>{label}</label>
			<Input 
				name={name}
				type={isPasswordField ? "password" : "input"}
				value={value} 
				onChange={onChange}
			/>
		</Form.Field>
	)
}

function createEditProfileModal(props) {
	
	var passField = []
	if(props.pageState.attempted) {
		if(!props.pageState.passwirdError) 
			passField.push(<p>Changes have been applied<br/></p>)
		else
			passField.push(<p>Wrong Password, Try again:<br/></p>)
	}
	passField.push(makeInputField("Confirm your Password:", "password", props.tempUserChanges.password, props.onHandleChange, true))

	return(
		<Modal 
				trigger={<Button onClick={() => props.onOpen(props.curUser)}>Edit Profile</Button>}
				open={props.pageState.modalOpen}
				onClose={props.onClose}
			>
			<Modal.Header>Edit Profile Form</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Header>Profile Details</Header>
					<p>Please input the following information:</p>
				</Modal.Description>
				<Form onSubmit={() => props.onSubmit(props.tempUserChanges.password, props.curUser.numId, props.tempUserChanges)}>
					{makeInputField("Email:", "email", props.tempUserChanges.email, props.onHandleChange)}
					{makeInputField("Phone Number:", "phoneNum", props.tempUserChanges.phoneNum, props.onHandleChange)}					
					<Form.Field>
						<label>Privacy Settings:</label>
						<Checkbox 
							name="priv"
							checked={props.tempUserChanges.priv}
							label="Make my Profile Private"
							onChange={props.onHandleChange}
						/>
					</Form.Field>
					{passField}
					<Button.Group floated='right' attached={false}>
						<Button type='submit'>Submit</Button>
						<Button type='cancel' onClick={props.onClose}>Cancel</Button>
					</Button.Group>
				</Form>
			</Modal.Content>
		</Modal>
	);
}

const mapStateToProps = createStructuredSelector({
	modalOpen: makeSelectModalOpen(),
	tempUserChanges: makeSelectTempUserChanges(),
	curUser: makeSelectCurUser(),
	reqPassword: makeSelectPasswordField(),
	pageState: makeSelectPageState()
})

export function mapDispatchToProps(dispatch) {
	return {
		onClose: () => dispatch(modalKill()),
		onOpen: (curUser) => dispatch(modalLoad(curUser)),
		onHandleChange: (e, {name, value, checked}) => dispatch(onInputChange(name, value, checked)),
		onSubmit: (password, user_id, tempUserChanges) => dispatch(attemptUserChange(password, user_id, tempUserChanges))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(createEditProfileModal)


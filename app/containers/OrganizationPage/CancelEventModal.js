import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Modal, Header, Form, Input, Button, Checkbox, Dropdown } from 'semantic-ui-react'

import { makeSelectModalOpen, makeSelectTempCancelEvent } from './selectors'
import { cancelEvent, modalStateOpen, onInputChange } from './actions'

function CancelEventModal(props) {

	var userOptions = props.events.map((event, index) => {return {value: event.event_id, text: event.name, key: event.event_id}})

	return(
		<Modal  trigger={<Dropdown.Item onClick={props.onOpen}>Cancel Event</Dropdown.Item>}
				open={props.modalOpen}
				onClose={props.onClose}
			>
			<Modal.Header>Cancel Event Form</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Header>Cancel Event</Header>
					<p>Please select the Event to Cancel</p>
					<Form onSubmit={() => props.onSubmit(props.tempCancelEvent.event_id)}>
						<Form.Field>
							<label>User:</label>
							<Dropdown 
								search 
								onChange={props.onHandleChange}
								options={userOptions}
								placeholder="Select..."
								value={props.tempCancelEvent.event_id}
								name="event_id"
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
	modalOpen: makeSelectModalOpen("cancelEventModalOpen"),
    tempCancelEvent: makeSelectTempCancelEvent(),
})

export function mapDispatchToProps(dispatch) {
	return {
		onSubmit: (event_id) => dispatch(cancelEvent(event_id)),
		onClose:  () => dispatch(modalStateOpen("cancelEventModalOpen", false)),
		onOpen:   () => dispatch(modalStateOpen("cancelEventModalOpen", true)),
        onHandleChange: (e, {name, value, checked}) => dispatch(onInputChange(name, "tempCancelEvent", value, checked)),
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(CancelEventModal)


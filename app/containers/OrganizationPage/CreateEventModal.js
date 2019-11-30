import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Modal, Header, Form, Input, Button, Checkbox, Dropdown } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'

import Map from '../Map'

import { makeSelectModalOpen, makeSelectTempEvent, makeSelectPageOrg, makeSelectTempEventCoor } from './selectors'
import { addEvent, modalStateOpen, onInputChange, onHandleMapClick } from './actions'

const eventTypesOptions = [
	{key:'regular', text:'Regular.', value:1},
]

function CreateEventModal(props) {
	return(
		<Modal  trigger={<Dropdown.Item onClick={props.onOpen}>Create Event</Dropdown.Item>}
				open={props.modalOpen}
				onClose={props.onClose}
			>
			<Modal.Header>New Event Form</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Header>Event Details</Header>
					<p>Please input the following information about your event:</p>
					<Form onSubmit={() => props.onSubmit(props.tempEventCoor, props.tempEvent, props.org.organization_id)}>
						<Form.Field>
							<label>Name:</label>
							<Input 
								name="eventName"
								value={props.tempEvent.eventName} 
								onChange={props.onHandleChange}
								placeholder="The name of your organization..." 
							/>
						</Form.Field>
						<Form.Field>
							<label>Description:</label>
							<Input 
								name="eventDescription"
								value={props.tempEvent.eventDescription} 
								onChange={props.onHandleChange}
								placeholder="Describe the Event..." 
							/>
						</Form.Field>
						<Form.Field>
							<label>Event Type:</label>
							<Dropdown 
								search 
								onChange={props.onHandleChange}
								options={eventTypesOptions}
								placeholder="Select..."
								value={props.tempEvent.eventType}
								name="eventType"
					            selection
							/>
						</Form.Field>
                        <Form.Field>
                            <label>Date:</label>
                            <DateInput
                                name="eventDate"
                                dateFormat="YY/MM/DD"
                                value={props.tempEvent.eventDate}
                                onChange={props.onHandleChange}
                            />	
                        </Form.Field>
                        <Form.Field>
                            <label>Time:</label>
                            <TimeInput
                                name="eventTime"
                                value={props.tempEvent.eventTime}
                                onChange={props.onHandleChange}
                            />	
                        </Form.Field>
						<Form.Field>
							<label>Privacy Settings:</label>
							<Checkbox 
								name="eventVisibility"
								checked={props.tempEvent.eventVisibility}
								label="Make my Event Private."
								onChange={props.onHandleChange}
							/>
						</Form.Field>
                        <Form.Field>
                            <label>Select Location:</label>
                            <Map 
                                handleClickedMap={props.onMapClick}
                                tempMarker={{ lat: props.tempEventCoor.latitude, lng: props.tempEventCoor.longitude }}
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
	modalOpen: makeSelectModalOpen("createEventModalOpen"),
    tempEvent: makeSelectTempEvent(),
    tempEventCoor: makeSelectTempEventCoor(),
    org: makeSelectPageOrg(),
})

export function mapDispatchToProps(dispatch, ownProps) {
	return {
		onSubmit: (tempEventCoor, tempEvent, hostingOrg) => dispatch(addEvent(tempEventCoor, tempEvent, hostingOrg)),
		onClose:  () => dispatch(modalStateOpen("createEventModalOpen", false)),
		onOpen:   () => dispatch(modalStateOpen("createEventModalOpen", true)),
        onHandleChange: (e, {name, value, checked}) => dispatch(onInputChange(name, "tempEvent", value, checked)),
        onMapClick: (coordinates) => dispatch(onHandleMapClick(coordinates)),
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CreateEventModal)


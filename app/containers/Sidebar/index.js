import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Sidebar as UISidebar } from 'semantic-ui-react'
import { Menu, Ref, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { makeSelectSidebarVisibility } from './selectors'
import { makeSelectCurUser } from '../app/selectors'
import { sidebarSetVisible } from './actions'

// TODO: Remove the <br> tags and add the padding as css style
//			Fix the route to profile so it is user-specific
function createMenuItem(props, name, text, iconName, linkTo, key) {
	return (
		<Menu.Item key={key} name={name} as={Link} to={linkTo} onClick={props.onSidebarHide}>
			<br/>
			<Icon name={iconName}/>
			{text}
			<br/><br/>
		</Menu.Item>
	);
}

function Sidebar(props) {
	const bodyRef = React.useRef();

	const menuItems = []
	menuItems.push(createMenuItem(props, "Home", "Home", "home", "/", 1))
	menuItems.push(createMenuItem(props, "Organization", "Organizations", "building", "/org/", 2))
	// menuItems.push(createMenuItem(props, "Events", "Events", "calendar alternate outline", "/events/", 3))
	if(props.curUser) {
		menuItems.push(createMenuItem(props, "Profile", "Profile", "address card outline", "/profile/"+props.curUser.id, 4))
		menuItems.push(createMenuItem(props, "Settings", "Settings", "setting", "/settings/", 5))
	} else {
		menuItems.push(createMenuItem(props, "Log In\nRegister", "Log In or Register", "address card outline", "/login", 4))
	}
	
	return(
		<UISidebar.Pushable as='div'>
		  <UISidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={props.onSidebarHide} vertical visible={props.isVisible} target={bodyRef} width='thin'>
		  		{menuItems}		
		  </UISidebar>
		  <Ref innerRef={bodyRef}>
	      	  <UISidebar.Pusher>
				{props.children}
	      	  </UISidebar.Pusher>
		  </Ref>
		</UISidebar.Pushable>
    );	
}

Sidebar.propTypes = {
	isVisible: PropTypes.bool,
	children: PropTypes.array,
	onSidebarHide: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
	isVisible: makeSelectSidebarVisibility(),
	curUser: makeSelectCurUser(),
})

export function mapDispatchToProps(dispatch) {
	return {
		onSidebarHide: () => dispatch(sidebarSetVisible(false))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Sidebar)
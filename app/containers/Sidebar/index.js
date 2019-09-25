import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Sidebar as UISidebar } from 'semantic-ui-react'
import { Menu, Ref, Icon } from 'semantic-ui-react'
import Wrapper from 'components/Wrapper'
import { Link } from 'react-router-dom'

import { makeSelectSidebarVisibility } from './selectors'
import { sidebarSetVisible } from './actions'

// TODO: Remove the <br> tags and add the padding as css style
//			Fix the route to profile so it is user-specific
function createMenuItem(props, name, text, iconName, linkTo) {
	return (
		<Menu.Item name={name} as={Link} to={linkTo} onClick={props.onSidebarHide}>
			<br/>
			<Icon name={iconName}/>
			{text}
			<br/><br/>
		</Menu.Item>
	);
}

function Sidebar(props) {
	const bodyRef = React.useRef();
	return(
		<UISidebar.Pushable as={Wrapper}>
		  <UISidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={props.onSidebarHide} vertical visible={props.isVisible} target={bodyRef} width='thin'>
		  		{createMenuItem(props, "Home", "Home", "home", "/")}		
		  		{createMenuItem(props, "Profile", "Profile", "address card outline", "/profile/")}		
		  		{createMenuItem(props, "Events", "Events", "calendar alternate outline", "/events/")}		
		  		{createMenuItem(props, "Clubs", "Clubs", "building", "/clubs/")}		
		  		{createMenuItem(props, "Settings", "Settings", "setting", "/settings/")}		
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
})

export function mapDispatchToProps(dispatch) {
	return {
		onSidebarHide: () => dispatch(sidebarSetVisible(false))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Sidebar)
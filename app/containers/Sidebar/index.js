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

function Sidebar(props) {
	const bodyRef = React.useRef();
	return(
		<UISidebar.Pushable as={Wrapper}>
		  <UISidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={props.onSidebarHide} vertical visible={props.isVisible} target={bodyRef} width='thin'>
		  		<Menu.Item name="Home" as={Link} to="/" onClick={props.onSidebarHide}>
		  			<br/>
		  			<Icon name="address card outline"/>
		  			Home
		  			<br/><br/>
		  		</Menu.Item>
		  		<Menu.Item name="Profile" as={Link} to="/profile/" onClick={props.onSidebarHide}>
					<br/>
		  			<Icon name="address card outline"/>
		  			Profile
		  			<br/><br/>		  			
		  		</Menu.Item>
		  		<Menu.Item name="Events" as={Link} to="/events/" onClick={props.onSidebarHide}>
		  			<br/>
		  			<Icon name="calendar alternate outline"/>
		  			Events
		  			<br/><br/>		  			
		  		</Menu.Item>
		  		<Menu.Item name="Clubs" as={Link} to="/clubs/" onClick={props.onSidebarHide}>
		  			<br/>
		  			<Icon name="building"/>
		  			Clubs
		  			<br/><br/>		  			
		  		</Menu.Item>
		  		<Menu.Item name="Settings" as={Link} to="/settings/" onClick={props.onSidebarHide}>
		  			<br/>
		  			<Icon name="setting"/>
		  			Settings
		  			<br/><br/>		  			
		  		</Menu.Item>
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
export default  compose(withConnect, memo)(Sidebar)
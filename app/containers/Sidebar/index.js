import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Sidebar as UISidebar } from 'semantic-ui-react'
import { Menu, Ref } from 'semantic-ui-react'
import Wrapper from 'components/Wrapper'

import { makeSelectSidebarVisibility } from './selectors'
import { sidebarSetVisible } from './actions'

function Sidebar(props) {
	const bodyRef = React.useRef();
	return(
		<UISidebar.Pushable as={Wrapper}>
		  <UISidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={props.onSidebarHide} vertical visible={props.isVisible} target={bodyRef} width='thin'>
		    {props.menu_items}
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
	menu_items: PropTypes.array,
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
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Menu } from 'semantic-ui-react';

import { sidebarSetVisible } from '../Sidebar/actions'

function Topbar(props) {
	return(
		<Menu>
			<Menu.Item name='menu' onClick={props.onChangeSidebarVisibility}>Menu</Menu.Item>
			<Menu.Menu name='user'>
				
			</Menu.Menu> 
		</Menu>
    );	
}

Topbar.propTypes = {
	onChangeSidebarVisibility: PropTypes.func
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
	return {
		onChangeSidebarVisibility: () => dispatch(sidebarSetVisible(true))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Topbar)
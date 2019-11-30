import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Menu, Icon, Popup, Form, Input, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import { makeSelectCurUser, makeSelectTempUser } from '../App/selectors'
import { onLoginAttempt, onLoginInputChange, onLogout } from '../App/actions'
import { sidebarSetVisible } from '../Sidebar/actions'

function createUserSection(user, props) {
	if(user == null) {
		return(
			<Popup trigger={
				<Menu.Item name="log-in">
					<Icon name='user'/>
					Log In
				</Menu.Item>
			} 
				on='click'
				position='bottom right'
			>
				<Form onSubmit={props.onLogin}>
					<Form.Field>
						<label>Username</label>
						<Input 
							name="username"
							value={props.tempUser.username}
							onChange={props.onHandleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<Input 
							name="password"
							type="password"
							value={props.tempUser.password}
							onChange={props.onHandleChange}
						/>
					</Form.Field>
					<Button type='submit'>Login</Button>
					<Button as={Link} to={encodeURI("/login")}>Register</Button>
				</Form>
			</Popup>
		)
	} else {
		const items = []
		items.push(
			<Menu.Item key={1} as={Link} to={'/profile/'+user.id}>
				{user.name}
			</Menu.Item>
		)
		items.push(
			<Menu.Item onClick={props.onLogoutFun} key={2}>Logout</Menu.Item>
		)
		return items
	}

}

function Topbar(props) {
	return(
		<Menu pointing secondary fixed='top'>
			<Menu.Item name='menu' onClick={props.onChangeSidebarVisibility}>
				<Icon name='bars'/>
				Menu
			</Menu.Item>
			<Menu.Menu name='userMenuSection' position='right'>
				{createUserSection(props.user, props)}
			</Menu.Menu> 
		</Menu>
    );	
}

Topbar.propTypes = {
	onChangeSidebarVisibility: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
	user: makeSelectCurUser(),
	tempUser: makeSelectTempUser(),
});

export function mapDispatchToProps(dispatch) {
	return {
		onChangeSidebarVisibility: () => dispatch(sidebarSetVisible(true)),
		onHandleChange: (event, {name, value}) => dispatch(onLoginInputChange(name, value)),
		onLogin: () => dispatch(onLoginAttempt()),
		onLogoutFun: () => dispatch(onLogout())
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Topbar)
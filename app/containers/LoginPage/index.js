import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Form, Input, Button} from 'semantic-ui-react';

import LoginWrapper from '../../components/LoginWrapper'
import { makeSelectCurUser, makeSelectTempUser, makeSelectRegisUser } from '../App/selectors';
import { makeSelectView } from './selectors'

import { onLoginAttempt, onLoginInputChange, onRegistrationAttempt } from '../App/actions';
import { onChangeView } from './actions'

function LoginPage(props) {
	if(props.user)
		props.history.push("profile/"+props.user.id)
	return (
		<LoginWrapper>
			<div className="login-wrap">
				<div className="login-html">
					<input id="tab-1" type="radio" name="tab" className="sign-in" checked={props.view == "signin"} onChange={props.onSignupClick}/><label htmlFor="tab-1" className="tab">Sign In</label>
					<input id="tab-2" type="radio" name="tab" className="sign-up" checked={props.view == "register"} onChange={props.onRegistClick}/><label htmlFor="tab-2" className="tab">Sign Up</label>
					<div className="login-form">
						<div className="sign-in-htm">
							<Form onSubmit={props.onLogin}>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Username</label>
									<Input 	id="user" 
											type="text" 
											className="input"
											name="username"
											value={props.tempLoginUser.username}
											onChange={props.onHandleChange}
										/>
								</Form.Field>
								<Form.Field as='div' className="group">
									<label htmlFor="pass" className="label">Password</label>
									<Input 	id="pass" className="input" data-type="password"
											name="password"
											type="password"
											value={props.tempLoginUser.password}
											onChange={props.onHandleChange}
										/>
								</Form.Field>
								<div className="group">
									<Button className='button' type='submit'>Login</Button>
								</div>
							</Form>
						</div>
						<div className="sign-up-htm">
							<Form onSubmit={() => props.onRegister(props.tempRegisUser)}>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Name</label>
									<Input 	id="name" 
											type="text" 
											className="input"
											name="userName"
											value={props.tempRegisUser.userName}
											onChange={(event, {name, value}) => props.onHandleChange("register", {name, value})}
										/>
								</Form.Field>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Username</label>
									<Input 	id="username" 
											type="text" 
											className="input"
											name="userUserName"
											value={props.tempRegisUser.userUserName}
											onChange={(event, {name, value}) => props.onHandleChange("register", {name, value})}
										/>
								</Form.Field>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Password</label>
									<Input 	id="password" 
											type="password"
											className="input"
											name="userPassword"
											value={props.tempRegisUser.userPassword}
											onChange={(event, {name, value}) => props.onHandleChange("register", {name, value})}
										/>
								</Form.Field>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Repeat Password</label>
									<Input 	id="confirmpassword"
											type="password" 
											className="input"
											name="confirmpassword"
											value={props.tempRegisUser.confirmpassword}
											onChange={(event, {name, value}) => props.onHandleChange("register", {name, value})}
										/>
								</Form.Field>
								<Form.Field as='div' className="group">
									<label htmlFor="user" className="label">Email Address</label>
									<Input 	id="email" 
											type="text" 
											className="input"
											name="userEmail"
											value={props.tempRegisUser.userEmail}
											onChange={(event, {name, value}) => props.onHandleChange("register", {name, value})}
										/>
								</Form.Field>
								<div className="group">
									<Button className='button' type='submit'>Sign Up</Button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</LoginWrapper>
	)
}

const mapStateToProps = createStructuredSelector({
	user: 		makeSelectCurUser(),
	tempLoginUser:	makeSelectTempUser(),
	tempRegisUser:	makeSelectRegisUser(),
	view: makeSelectView(),
});

export function mapDispatchToProps(dispatch) {
	return {
		onHandleChange: (issuer, {name, value}) => dispatch(onLoginInputChange(name, value, issuer)),
		onLogin: 		() => dispatch(onLoginAttempt()),
		onRegister:		(tempRegisUser) => dispatch(onRegistrationAttempt(tempRegisUser)), 
		onSignupClick:	() => dispatch(onChangeView("signin")),
		onRegistClick:	() => dispatch(onChangeView("register")) 
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(LoginPage)
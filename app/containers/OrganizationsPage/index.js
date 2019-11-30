import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {  Menu, Input } from 'semantic-ui-react'
 
import Banner from 'components/Banner'
import OrganizationsView from 'components/OrganizationsView'

import CreateOrganizationModal from './CreateOrganizationModal'

import { makeSelectOrganizations, makeSelectPageState } from './selectors.js'
import { requestOrganizations, setLoaded } from './actions.js'

function OrganizationsPage(props) {

	if(!props.pageState.isLoaded) {
		props.setLoadedTrue();
		props.load(0);
	}

	return(
		<div>
  			<Banner header="Organizations" compact={true}/>
  			<Menu secondary>
  				<Menu.Item header>Search Organizations</Menu.Item>
  				<Menu.Item>
  					<Input icon='search'/>
  				</Menu.Item>
  				<Menu.Menu pointing="true" position="right">
	  				<Menu.Item>
	  					<CreateOrganizationModal />
	  				</Menu.Item>
  				</Menu.Menu>
  			</Menu>
			<OrganizationsView  orgs={props.orgs} compact={false} />
		</div>
    );	
}

const mapStateToProps = createStructuredSelector({
	orgs: makeSelectOrganizations(),
	pageState: makeSelectPageState(),
})

export function mapDispatchToProps(dispatch) {
	return {
		load: (index) => dispatch(requestOrganizations(index, 20)),
		setLoadedTrue: () => dispatch(setLoaded(true))
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OrganizationsPage)

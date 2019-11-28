import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Segment, Grid, Image, Card, Menu, Input, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
 
import Banner from 'components/Banner'
import OrganizationsView from 'components/OrganizationsView'

import CreateOrganizationModal from './CreateOrganizationModal'

import { makeSelectOrganizations } from './selectors.js'

function OrganizationsPage(props) {
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
})

export function mapDispatchToProps(dispatch) {
	return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OrganizationsPage)

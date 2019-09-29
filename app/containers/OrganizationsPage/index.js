import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Segment, Grid, Image, Card, Menu, Input, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import default_image from './fiu_gl.png'

import Banner from 'components/Banner';
import OrganizationsWrapper from 'components/OrganizationsWrapper'
import CreateOrganizationModal from './CreateOrganizationModal'

import { makeSelectOrganizations } from './selectors.js'

function makeOrganizations(orgs, history) {
	const orgCards = []
	for (var i = 0; i < orgs.length; i++) {
		const img = default_image;
		if(orgs[i].img != null) {
			img = orgs[i].img
		}
		const name = encodeURI("/"+orgs[i].name)
		orgCards[i]=(
			<Card as={Link} key={i} to={name}>
				<Image src={img}/>
				<Card.Header as='h3' textAlign='center'>
					{orgs[i].name}
				</Card.Header>
				<Card.Content style={{color: 'black'}}>
					{orgs[i].desc}
				</Card.Content>
			</Card>
		)
	}
	return orgCards;
}

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
	  					<CreateOrganizationModal/>
	  				</Menu.Item>
  				</Menu.Menu>
  			</Menu>
  			<OrganizationsWrapper vertical>
  				<Card.Group textAlign="center" itemsPerRow={4} stackable>
  					{makeOrganizations(props.orgs, props.history)}
  				</Card.Group>
  			</OrganizationsWrapper>
		</div>
    );	
}

const mapStateToProps = createStructuredSelector({
	orgs: makeSelectOrganizations(),
})

export function mapDispatchToProps(dispatch) {
	return () => {return null};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(OrganizationsPage)

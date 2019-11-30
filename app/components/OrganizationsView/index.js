import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Image, Card, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import default_image from './fiu_gl.png'

import OrganizationsWrapper from 'components/OrganizationsWrapper'

function makeOrganizations(orgs, compact) {
	const orgCards = []
	for (var i = 0; i < orgs.length; i++) {
		const img = default_image;
		if(orgs[i].img != null) {
			img = orgs[i].img
        }
        const cardContent = (<br/>)
        if(!compact)
            cardContent = 
                (				
                    <Card.Content style={{color: 'black'}}>
                        {orgs[i].desc}
                    </Card.Content>
                )
		orgCards[i]=(
			<Card key={i} as={Link} to={encodeURI("/org/"+orgs[i].organization_id)}>
				<Image src={img}/>
				<Card.Header as='h3' textAlign='center'>
					{orgs[i].name}
				</Card.Header>
                {cardContent}
			</Card>
		)
	}
	return orgCards;
}

function OrganizationsView(props) {
    var header = (<p></p>)
    if(props.header)
        header = <Header content={props.header} />
    return (
        <OrganizationsWrapper vertical>
            {header}
            <Card.Group textAlign="center" itemsPerRow={4} stackable>
                {makeOrganizations(props.orgs, props.compact)}
            </Card.Group>
        </OrganizationsWrapper>
    )
}

const mapStateToProps = createStructuredSelector({})
export function mapDispatchToProps(dispatch) {
	return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(OrganizationsView)

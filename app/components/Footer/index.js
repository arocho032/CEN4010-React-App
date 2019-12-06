import React from 'react'
import { Segment, Container, Grid, List } from 'semantic-ui-react';

import StyledLink from './StyledLink'
import StyledFooter from './StyledFooter'
import Header from './Header'

function Footer() {
	return (
		<StyledFooter>
			<Segment className="footer" inverted>
				<Container>
					<Grid stackable>
						<Grid.Row>
							<Grid.Column width={3}>
								<Header>Student Organization System (SOS)</Header>
								<List link inverted>
									<List.Item as={StyledLink} to="/about">About Us</List.Item>
									{/*<List.Item as={StyledLink} to="/help">Help</List.Item>
								  <List.Item as={StyledLink} to="/sitemap">Sitemap</List.Item>
									<List.Item as={StyledLink} to="/contact">Contact</List.Item>*/}
								</List>
							</Grid.Column>
							<Grid.Column width={10}>
								{/*<Header>Footer Header</Header>
								<p>Extra Info Here</p>*/}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</StyledFooter>
	);
}

export default Footer;

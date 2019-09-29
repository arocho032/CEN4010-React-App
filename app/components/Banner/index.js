import React from 'react'
import { Header as UIHeader, Container, Segment} from 'semantic-ui-react';

import styled from 'styled-components'

const StyledH1 = styled(UIHeader)`
	font-size: 4em;
	margin-top: 6em;
	font-weight: normal;
	margin-bottom: 0;
	color: white;
`;

const StyledH2 = styled(UIHeader)`
	font-size: 1.7em;
	font-weight: normal;
	margin-top: 1.5em;
	color: white;
`;

const StyledSegment = styled(Segment)`
	min-height: 4em;
`

const StyledContainer = styled(Container)`
    vertical-align: middle;
	text-align: center;
	letter-spacing: 3px;
	padding: ${props => props.compact ? '2% 10% 1%' : '10% 10%'};
`

function Banner(props) {
	return (
		<StyledSegment vertical inverted>
			<StyledContainer as='div' compact={props.compact}>
				<StyledH1 as='h1'>{props.header}</StyledH1>
				<StyledH2 as='h2'>{props.subheader}</StyledH2>
			</StyledContainer>
		</StyledSegment>
	)
}

export default Banner;



import styled from 'styled-components'

import { Segment } from 'semantic-ui-react';

const MapContainer = styled(Segment)`
	&&& {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 50vh;
	}
`
export default MapContainer;
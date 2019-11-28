import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Container, Segment, Header} from 'semantic-ui-react';

import Banner from 'components/Banner';
import EventsView from 'components/EventsView';

// import openSocket from'socket.io-client'
// const socket = openSocket('http://localhost:9000')

export default function HomePage() {

	// socket.emit("testevent", "{}")
	// socket.on("returnevent", ret => {
	// 	console.log(ret)
	// })

	return (
  		<div>
  			<Banner header="Student Organization System" subheader="Manage Members, Create Events, and More."/>
  			<EventsView header="All Events" events={[]} hasMap={true}/>
  			<br/>
  			<br/>
  			<Segment vertical>
	  			<Container text>
	  				<Header as='h2' content="Funtionalities"/>
	 				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	 				Vivamus elementum, purus pretium ultrices feugiat, elit dolor
	 				mattis orci, eu mattis metus nunc et sem. In sed elementum ligula.
	 				Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.
	 				Cras in ultrices ex. Fusce dictum vulputate mi id ullamcorper.
	 				Phasellus viverra, dolor non accumsan pretium, dolor nibh molestie
	 				neque, eu molestie lacus turpis non diam. Nulla in turpis luctus,
	 				auctor ipsum eleifend, venenatis nunc. Aenean rutrum nulla eget elit
	 				commodo, non sollicitudin arcu ornare. Mauris sit amet magna finibus,
	 				commodo massa vel, auctor tortor. Mauris odio erat, lobortis non dui
	 				id, tincidunt faucibus sem. Donec fermentum risus metus, a maximus
	 				odio fermentum a. Sed sed magna eu ligula sagittis posuere non vitae
	 				enim. Nulla metus quam, ultricies nec velit non, rutrum convallis
	 				nulla. Donec convallis commodo ipsum, eu commodo ex vulputate ut
	 				Suspendisse consequat lorem nisi, vitae luctus purus tristique a.
	 				Cras rutrum suscipit sapien ut lobortis.   	
	 				<br/>	
	 				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	 				Vivamus elementum, purus pretium ultrices feugiat, elit dolor
	 				mattis orci, eu mattis metus nunc et sem. In sed elementum ligula.
	 				Maecenas rhoncus pretium massa, hendrerit lobortis enim tristique vel.
	 				Cras in ultrices ex. Fusce dictum vulputate mi id ullamcorper.
	 				Phasellus viverra, dolor non accumsan pretium, dolor nibh molestie
	 				neque, eu molestie lacus turpis non diam. Nulla in turpis luctus,
	 				auctor ipsum eleifend, venenatis nunc. Aenean rutrum nulla eget elit
	 				commodo, non sollicitudin arcu ornare. Mauris sit amet magna finibus,
	 				commodo massa vel, auctor tortor. Mauris odio erat, lobortis non dui
	 				id, tincidunt faucibus sem. Donec fermentum risus metus, a maximus
	 				odio fermentum a. Sed sed magna eu ligula sagittis posuere non vitae
	 				enim. Nulla metus quam, ultricies nec velit non, rutrum convallis
	 				nulla. Donec convallis commodo ipsum, eu commodo ex vulputate ut
	 				Suspendisse consequat lorem nisi, vitae luctus purus tristique a.
	 				Cras rutrum suscipit sapien ut lobortis.   
	  			</Container>
  			</Segment>
  		</div>
  	);
}
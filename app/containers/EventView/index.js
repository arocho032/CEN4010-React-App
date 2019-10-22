import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import { Card, Header, Segment, Grid, Image } from 'semantic-ui-react';

import MapContainer from '../../components/MapContainer';

import messages from './messages';
import FIU_IMAGE from './fiu_map.png';

import { makeSelectEvents } from './selectors.js';

function makeEventCards(events) {
  const cards = [];
  for (let i = 0; i <= 5; i++) {
    if (events.length <= i) break;
    cards[i] = (
      <Card key={i}>
        <Card.Header textAlign="center">{events[i].name}</Card.Header>
        <Card.Meta textAlign="center">
          <span>
            {events[i].time.date}, {events[i].time.time}
          </span>
        </Card.Meta>
        <Card.Content>
          <span>{events[i].desc}</span>
          <br />
          <span>
            <b>Location:</b> {events[i].loc.name}
          </span>
        </Card.Content>
      </Card>
    );
  }
  return cards;
}

function EventView(props) {
  return (
    <Grid padded centered columns={2}>
      <Grid.Column width={5}>
        <Segment>
          <Header content="Current Events" />
          <Card.Group centered textAlign="center" itemsPerRow={2}>
            {makeEventCards(props.events)}
          </Card.Group>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment style={{ width: '100%', height: '120%' }}>
          <MapContainer />
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

// EventView.propTypes = {

// }

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onClick: () => null,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EventView);

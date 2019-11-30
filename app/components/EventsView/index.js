import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Card, Header, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import Map from 'containers/Map';

function makeEventCards(events) {
  const cards = [];
  for (let i = 0; i <= 5; i++) {
    if (events.length <= i) break;
    cards[i] = (
      <Card as={Link} key={i} to={encodeURI("/event/"+events[i].eventId)}>
        <Card.Header textAlign="center">{events[i].name}</Card.Header>
        <Card.Meta textAlign="center">
          <span>{events[i].date}, {events[i].time}</span>
        </Card.Meta>
        <Card.Content style={{color: 'black'}}>
          <span>{events[i].description}</span> <br />
        </Card.Content>
      </Card>
    );
  }
  return cards;
}

function displayMap(props) {
  if(props.hasMap)
    return(
      <Grid.Column>
        <Map events={props.events}/>
      </Grid.Column>
    )
}

function EventsView(props) {
  return (
    <Grid stackable padded centered columns={2}>
      <Grid.Column>
        <Segment>
          <Header content={props.header} />
          <Card.Group stackable centered textAlign="center">
            {makeEventCards(props.events)}
          </Card.Group>
        </Segment>
      </Grid.Column>
      {displayMap(props)}
    </Grid>
  );
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EventsView);

import React from 'react';

import { Container, Segment, Header, Grid } from 'semantic-ui-react';

import Wrapper from '../../components/Wrapper'

import Map from '../Map';

export default function AboutPage() {
  return (
    <Wrapper>
      <Map />
      <Container text>
            <br />
            <Header as="h2" content="About" />
            <br />
            Student Organization System (SOS) is a web-based system meant to
            provide leaders and administrators of organizations a way to manage
            members and events. Simultaneously, it allows users to monitor the
            events and organizations they belong to.
            <br />
            <br />
            <a href="https://github.com/arocho032/CEN4010-Team-5" target="popup">
              Check out our GitHub
            </a>
      </Container>  
    </Wrapper>
  );
}

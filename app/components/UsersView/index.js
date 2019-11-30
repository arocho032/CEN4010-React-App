import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Card, Header, Segment, Grid, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

function makeUserCards(users) {
    console.log(users)
    const members = []
    for (const [key, value] of Object.entries(users)) 
        members.push(value)
    return members.map((user, index) => 
        (
            <Card key={index} as={Link} to={encodeURI("/profile/"+user.user_name)}>
                <Card.Content>
                    <Card.Header textAlign="center">{user.user_name}</Card.Header>
                    <Card.Meta textAlign="center">
                        <span>{user.email}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    );
}

function UsersView(props) {
    return (
        <Grid stackable padded centered columns={1}>
            <Grid.Column>
                <Segment>
                    <Header content={props.header} />
                    <Card.Group stackable textAlign="center" itemsPerRow={10}>
                        {makeUserCards(props.users)}
                    </Card.Group>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = createStructuredSelector({})

export function mapDispatchToProps(dispatch) { return {} }

const withConnect = connect(
   mapStateToProps,
   mapDispatchToProps, 
)

export default compose(
    withConnect,
    memo,
)(UsersView)
// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';

// app component imports
import { Image, Item, Label, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const ActivityDetailedSidebar = () => {
    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                3 People Going
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    <Item style={{ postion: 'relative' }}>
                        <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                            ribbon='right'
                        >Host</Label>
                        <Image size='tiny' src='/assets/user.png'/>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={'#'}>Bob</Link>
                            </Item.Header>
                            <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item style={{ postion: 'relative' }}>
                        <Label
                            style={{ position: 'absolute' }}
                            color='orange'
                        >Host</Label>
                        <Image size='tiny' src='/assets/user.png'/>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={'#'}>Tom</Link>
                            </Item.Header>
                            <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item style={{ position: 'relative' }}>
                        <Image size='tiny' src='/assets/user.png'/>
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='h3'>
                                <Link to={'#'}>Sally</Link>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                </List>
            </Segment>
        </Fragment>
    )
}

export default observer(ActivityDetailedSidebar);

// dependency imports
import React, { Fragment } from 'react';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';

//  app component imports
import { Item, Button, Segment, Icon } from 'semantic-ui-react';


interface  Props{
    activity: Activity;
}

const ActivitiListItem = ({activity}:Props) => {
    return (
        <Fragment>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular src='/assets/user.png'/>
                            <Item.Content>
                                <Item.Header as={Link} to={`/activitites/${activity.id}`}>
                                    {activity.title}
                                </Item.Header>
                                <Item.Description>Hosted by Bob</Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>

                <Segment>
                    <span>
                        <Icon name='clock'/>{activity.date} 
                        <Icon name='marker'/>{activity.venue}
                    </span>
                </Segment>

                <Segment secondary>
                    Attendees go here
                </Segment>

                <Segment clearing>
                    <span>{activity.description}</span>
                    <Button 
                        as={Link} 
                        to={`/activities/${activity.id}`} 
                        color='teal'
                        floated='right'
                        content='View'
                    />
                </Segment>
            </Segment.Group>
        </Fragment>
    )
}

export default ActivitiListItem

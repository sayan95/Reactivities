// dependency imports
import React, { Fragment } from 'react';
import { Activity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';

// app component imports
import { Grid, Icon, Segment } from 'semantic-ui-react';

interface Props{
    activity: Activity;
}

const ActivityDetailedInfo = ({activity}: Props) => {
    return (
        <Fragment>
            <Segment.Group>
                <Segment attached='top'> 
                    <Grid>
                        <Grid.Column width={1}>
                            <Icon size='large' color='teal' name='info'/>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p>{activity.description}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon size='large' color='teal' name='calendar'/>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <span>{activity.date}</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon name='marker' size='large' color='teal'/>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <span>{activity.venue}, {activity.city}</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Segment.Group>
        </Fragment>
    )
}

export default observer(ActivityDetailedInfo);

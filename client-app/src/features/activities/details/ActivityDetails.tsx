import React, { Fragment } from 'react';
import { useStore } from '../../../app/stores/store';


import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';


const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

    if(!activity) return <LoadingComponent/>;

    return (
        <Fragment>
            <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span>{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button basic color='blue' content='Edit' onClick={() => openForm(activity.id)}/>
                        <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity}/>
                    </Button.Group>
                </Card.Content>
            </Card>
        </Fragment>
    )
}

export default ActivityDetails

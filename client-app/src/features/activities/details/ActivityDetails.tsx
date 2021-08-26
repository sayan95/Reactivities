// dependency imports
import React, { Fragment, useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// app component imports
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';


const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    //side effects
    useEffect(() => {
        id && loadActivity(id);
    }, [id, loadActivity]);

    if(loadingInitial || !activity) return <LoadingComponent/>;
    
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
                        <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='Edit' />
                        <Button as={Link} to='/activities' basic color='grey' content='Cancel'/>
                    </Button.Group>
                </Card.Content>
            </Card>
        </Fragment>
    )
}

export default observer(ActivityDetails);

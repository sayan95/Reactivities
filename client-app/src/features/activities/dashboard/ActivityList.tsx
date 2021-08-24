import React, { Fragment, useState, MouseEvent } from 'react'
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite';

import { Button, Item, Label, Segment } from 'semantic-ui-react'


const ActivityList = () => {
    const {activityStore} = useStore();
    const {selectActivity, loading, deleteActivity, activitiesByDate: activities} = activityStore;

    const [target, setTarget] = useState('');

    const handleActivityDelete = (e:MouseEvent<HTMLButtonElement>, id:string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    } 

    return (
        <Fragment>
            <Segment>
                <Item.Group divided>
                    {activities.map(activity => (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a' >{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button floated='right' content='View' color='blue' onClick={() => selectActivity(activity.id)}/>
                                    <Button 
                                        name={activity.id}
                                        loading={loading && target === activity.id} 
                                        floated='right' 
                                        content='Delete' 
                                        color='red' 
                                        onClick={(e) => handleActivityDelete(e, activity.id)}
                                    />
                                    <Label basic content={activity.category}/>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </Fragment>
    )
}

export default observer(ActivityList);

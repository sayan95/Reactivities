import React, { Fragment, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

import {Button, Form, Segment} from 'semantic-ui-react';


const ActivityForm = () => {
    const {activityStore}  = useStore();
    const {selectedActivity, closeForm, loading, createActivity, updateActivity} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () => {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setActivity({
            ...activity,
            [e.target.name] : e.target.value
        })
    }
    

    return (
        <Fragment>
            <Segment clearing>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                    <Form.Input placeholder='Title' name='title' value={activity.title} onChange={handleInputChange}/> 
                    <Form.TextArea placeholder='Description' name='description' value={activity.description} onChange={handleInputChange}/>
                    <Form.Input placeholder='Category' name='category' value={activity.category} onChange={handleInputChange}/>
                    <Form.Input type='date' placeholder='Date' name='date' value={activity.date} onChange={handleInputChange}/>
                    <Form.Input placeholder='City' name='city' value={activity.city} onChange={handleInputChange}/>
                    <Form.Input placeholder='Venue' name='venue' value={activity.venue} onChange={handleInputChange}/>
                    <Button loading={loading} floated='right' positive type='submit' content='Submit'/>
                    <Button floated='right' type='button' content='Cancel' onClick={closeForm}/>
                </Form>
            </Segment>
        </Fragment>
    )
}

export default observer(ActivityForm);

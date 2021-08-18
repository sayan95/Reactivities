import React, { Fragment, useState } from 'react'
import { Activity } from '../../../app/models/activity';

import {Button, Form, Segment} from 'semantic-ui-react';

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity:Activity) => void;
}

const ActivityForm = ({activity: selectedActivity, closeForm, createOrEdit}:Props) => {
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
        console.log(activity);
        createOrEdit(activity);
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
                    <Form.Input placeholder='Date' name='date' value={activity.date} onChange={handleInputChange}/>
                    <Form.Input placeholder='City' name='city' value={activity.city} onChange={handleInputChange}/>
                    <Form.Input placeholder='Venue' name='venue' value={activity.venue} onChange={handleInputChange}/>
                    <Button floated='right' positive type='submit' content='Submit'/>
                    <Button floated='right' type='button' content='Cancel' onClick={closeForm}/>
                </Form>
            </Segment>
        </Fragment>
    )
}

export default ActivityForm

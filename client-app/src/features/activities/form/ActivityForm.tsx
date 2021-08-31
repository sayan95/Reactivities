// dependency imports
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Activity } from '../../../app/models/activity';
import {v4 as uuid} from "uuid";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import {categoryOptions} from '../../common/options/categoryOptions';

// app  component imports
import {Button, Header, Segment} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ReactiveTextInput from '../../common/form/ReactiveTextInput';
import ReactiveTextArea from '../../common/form/ReactiveTextArea';
import ReactiveSelectInput from '../../common/form/ReactiveSelectInput';
import ReactiveDateTimeInput from '../../common/form/ReactiveDateTimeInput';

const ActivityForm = () => {
    const history = useHistory();
    const {activityStore}  = useStore();
    const {loading, createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();
    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        category: Yup.string().required('The category is required'),
        description: Yup.string().required('The description is required').max(80, 'max length for description is 80'),
        date: Yup.string().required('The date is required').nullable(),
        city: Yup.string().required('The city is required'),
        venue: Yup.string().required('The venue is required'),
    });

    // sideeffect
    useEffect(() => {
        id && loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    
    const handleFormSubmit = (activity: Activity) => {
        if(activity.id.length === 0){
            let newActivity = { ...activity, id: uuid() };
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        }else{
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        } 
    }


    if(loadingInitial) return <LoadingComponent content='Loading activity'/>

    return (
        <Fragment>
            <Segment clearing>
                <Header content='Activity Details' sub color='teal'/>
                <Formik 
                    validationSchema={validationSchema}
                    enableReinitialize 
                    initialValues={activity} 
                    onSubmit={values => handleFormSubmit(values)}
                >
                    {({handleSubmit, isValid, isSubmitting, dirty}) => (
                        <Fragment>
                            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                                <ReactiveTextInput name='title' placeholder='Title' />
                                <ReactiveTextArea rows={3} name='description' placeholder='Description' />
                                <ReactiveSelectInput options={categoryOptions} placeholder='Category' name='category'/>
                                <ReactiveDateTimeInput 
                                    name='date'
                                    placeholderText='Date'
                                    showTimeSelect
                                    timeCaption='time'
                                    dateFormat='MMMM d, yyyy h:mm aa'    
                                />
                                <Header content='Location Details' sub color='teal'/>
                                <ReactiveTextInput placeholder='City' name='city'/>
                                <ReactiveTextInput placeholder='Venue' name='venue'/>
                                <Button 
                                    disabled={isSubmitting || ! dirty || !isValid}
                                    loading={loading} 
                                    floated='right' 
                                    positive 
                                    type='submit'
                                    content='Submit'/>
                                <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                            </Form>
                        </Fragment>
                    )}
                </Formik>
            </Segment>
        </Fragment>
    )
}

export default observer(ActivityForm);

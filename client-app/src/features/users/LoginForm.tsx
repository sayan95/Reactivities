// dependency imports
import React, { Fragment } from 'react';
import {ErrorMessage, Form, Formik} from 'formik';
import {useStore} from '../../app/stores/store';

// app component imports
import ReactiveTextInput from '../common/form/ReactiveTextInput';
import { Button, Header, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';


const LoginForm = () => {
    const {userStore} = useStore();

    return (
        <Fragment>
            <Formik
                initialValues={{ email: "", password: "", error: null}}
                onSubmit = {(values, {setErrors}) => userStore.login(values).catch(error => 
                    setErrors({error : 'Invalid email or password'})    
                )}   
            >
                {({handleSubmit, isSubmitting, errors}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <Header as='h3' color='teal' textAlign='center' content='Login to Reactivities'/>
                        <ReactiveTextInput name='email' placeholder='Email'/>
                        <ReactiveTextInput name='password' placeholder='Password' type='password'/>
                        <ErrorMessage 
                            name='error'
                            render={() => 
                            <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error}/>}
                        />
                        <Button loading={isSubmitting} positive content='Login' type='submit' fluid/>
                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

export default observer(LoginForm);

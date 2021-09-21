// dependency imports
import React, { Fragment } from 'react';
import {ErrorMessage, Form, Formik} from 'formik';
import {useStore} from '../../app/stores/store';

// app component imports
import ReactiveTextInput from '../common/form/ReactiveTextInput';
import { Button, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup';
import ValidationErrors from '../errors/ValidationErrors';

const RegisterForm = () => {
    const {userStore} = useStore();

    return (
        <Fragment>
            <Formik
                initialValues={{displayName: "", username: "", email: "", password: "", error: null}}
                onSubmit = {(values, {setErrors}) => userStore.register(values).catch(error => 
                    setErrors({error})    
                )}   
                validationSchema={Yup.object({
                    displayName: Yup.string().required("display name is required"),
                    username: Yup.string().required("user name i required"),
                    email: Yup.string().required("email is required").email("not a valid email"),
                    password: Yup.string().required("password is required"),
                })}
            >
                {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                    <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                        <Header as='h3' color='teal' textAlign='center' content='Signup to Reactivities'/>
                        <ReactiveTextInput name='displayName' placeholder='Display name'/>
                        <ReactiveTextInput name='username' placeholder='User name'/>
                        <ReactiveTextInput name='email' placeholder='Email'/>
                        <ReactiveTextInput name='password' placeholder='Password' type='password'/>
                        <ErrorMessage 
                            name='error'
                            render={() => 
                            <ValidationErrors errors={errors.error}/> }
                        />
                        <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} positive content='Register' type='submit' fluid/>
                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

export default observer(RegisterForm);

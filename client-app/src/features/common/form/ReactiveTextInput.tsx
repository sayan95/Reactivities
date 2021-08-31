// dependency imports
import React, { Fragment } from 'react';
import {useField} from 'formik';

// app component imports
import { Form, Label } from 'semantic-ui-react';

interface Props{
    placeholder: string;
    name: string;
    label?: string;
}

const ReactiveTextInput = (props: Props) => {
    const [field, meta] = useField(props.name);
    return (
        <Fragment>
            <Form.Field error={meta.touched && !!meta.error}>
                <label>{props.label}</label>
                <input {...field} {...props}/>
                {meta.touched && meta.error && (
                    <Label basic color='red' content={meta.error} style={{ marginTop:'5px' }}/>
                )}
            </Form.Field>
        </Fragment>
    )
}

export default ReactiveTextInput;

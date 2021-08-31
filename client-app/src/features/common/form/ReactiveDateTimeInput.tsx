// dependency imports
import React, { Fragment } from 'react';
import {useField} from 'formik';

// app component imports
import { Form, Label } from 'semantic-ui-react';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';



const ReactiveDateTimeInput = (props: Partial<ReactDatePickerProps<any>>) => {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Fragment>
            <Form.Field error={meta.touched && !!meta.error}>
                <DatePicker
                    {...field}
                    {...props}
                    selected={(field.value && new Date(field.value)) || null}
                    onChange = {value => helpers.setValue(value)} 
                />

                {meta.touched && meta.error && (
                    <Label basic color='red' content={meta.error} style={{ marginTop:'5px' }}/>
                )}
            </Form.Field>
        </Fragment>
    )
}

export default ReactiveDateTimeInput

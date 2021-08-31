// dependency imports
import React, { Fragment } from 'react';
import {useField} from 'formik';

// app component imports
import { Form, Label, Select } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    options: any;
    label?: string;
}

const ReactiveSelectInput = (props: Props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Fragment>
            <Form.Field error={meta.touched && !!meta.error}>
                <Select 
                    clearable
                    options={props.options}
                    value={field.value || null}
                    onChange={(e, d) => helpers.setValue(d.value)}
                    onBlur={() => helpers.setTouched(true)}
                    placeholder={props.placeholder}
                />
                {meta.touched && meta.error && (
                    <Label basic color='red' content={meta.error} style={{ marginTop:'5px' }}/>
                )}
            </Form.Field>
            
        </Fragment>
    )
}

export default ReactiveSelectInput

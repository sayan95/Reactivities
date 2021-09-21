// dependency imports
import React, { Fragment } from 'react';

// app component imports
import { Message } from 'semantic-ui-react';

interface Props{
    errors: any;
}

const ValidationErrors = ({errors}: Props) => {
    return (
        <Fragment>
            <Message error>
                {errors && 
                    Array.isArray(errors) ? (
                        <Message.List>
                            {errors.map((err:any, index: any) => (
                                <Message.Item key={index}>{err}</Message.Item>
                            ))}
                        </Message.List>
                    ): () => console.log(errors)
                }
            </Message>
        </Fragment>
    )
}

export default ValidationErrors

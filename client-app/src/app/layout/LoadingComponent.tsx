import React, { Fragment } from 'react'

import {Dimmer, Loader} from 'semantic-ui-react';

interface Props{
    inverted?: boolean;
    content?: string;
}

const LoadingComponent = ({content='Loading...', inverted=true}:Props) => {
    return (
        <Fragment>
            <Dimmer active={true} inverted={inverted}>
                <Loader content={content}/>
            </Dimmer>
        </Fragment>
    )
}

export default LoadingComponent

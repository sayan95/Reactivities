// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import {useStore} from '../../app/stores/store';

// app component imports
import { Header, Segment } from 'semantic-ui-react';

const ServerError = () => {
    const {commonStore} = useStore();
    return (
        <Fragment>
             <Header as='h1' content='Server Error'/>
             <Header sub as='h5' color='red' content={commonStore.error?.message}/>
             {commonStore.error?.details && (
                 <Segment>
                     <Header as='h4' content='Statck trace' color='teal'/>
                     <code style={{ marginTop:'10px' }}>{commonStore.error.details}</code>
                 </Segment>
             )}
        </Fragment>
    )
}

export default observer(ServerError);

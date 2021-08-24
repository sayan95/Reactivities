import React, { Fragment } from 'react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

import {Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';


const  ActivityDashboard = () => {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;

    return (
        <Fragment>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList/>
                </Grid.Column>

                <Grid.Column width='6'>
                    {selectedActivity && !editMode && <ActivityDetails/>}
                    { editMode && <ActivityForm/> }
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}

export default observer(ActivityDashboard);

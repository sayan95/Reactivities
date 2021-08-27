// dependency imports
import React, { Fragment, useEffect } from 'react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

// app component imports
import {Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityFilters from './ActivityFilters';
import LoadingComponent from '../../../app/layout/LoadingComponent';


const  ActivityDashboard = () => {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    // side effects
    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities]);

    if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities'/>
    
    return (
        <Fragment>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList/>
                </Grid.Column>

                <Grid.Column width='6'>
                    <ActivityFilters/>
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}

export default observer(ActivityDashboard);

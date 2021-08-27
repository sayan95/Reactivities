// dependency imports
import React, { Fragment, useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// app component imports
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';


const ActivityDetails = () => {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    //side effects
    useEffect(() => {
        id && loadActivity(id);
    }, [id, loadActivity]);

    if(loadingInitial || !activity) return <LoadingComponent/>;
    
    return (
        <Fragment>
            <Grid>
                <Grid.Column width={10}>
                    <ActivityDetailedHeader activity={activity}/>
                    <ActivityDetailedInfo activity={activity}/>
                    <ActivityDetailedChat/>
                </Grid.Column>
                <Grid.Column width={6}> 
                    <ActivityDetailedSidebar/>
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}

export default observer(ActivityDetails);

// dependency imports
import React, { Fragment } from 'react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

// app component imports
import { Header } from 'semantic-ui-react';
import ActivityListItem from './ActivitiListItem';

const ActivityList = () => {
    const {activityStore} = useStore();
    const { groupedActivities } = activityStore;

    return (
        <Fragment>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'> 
                        {group}
                    </Header>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity}/>
                    ))}
                </Fragment>
            ))}
        </Fragment>
    )
}

export default observer(ActivityList);

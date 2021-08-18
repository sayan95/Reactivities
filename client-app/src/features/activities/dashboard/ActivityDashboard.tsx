import React, { Fragment } from 'react'
import { Activity } from '../../../app/models/activity';

import {Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities : Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (is:string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

const ActivityDashboard = ({activities, selectedActivity, 
    selectActivity, cancelSelectActivity, editMode, 
    openForm, closeForm, createOrEdit, deleteActivity}:Props) => {

    return (
        <Fragment>
            <Grid>
                <Grid.Column width='10'>
                    <ActivityList 
                        activities={activities} 
                        selectActivity={selectActivity}
                        deleteActivity={deleteActivity} 
                    />
                </Grid.Column>

                <Grid.Column width='6'>
                    {selectedActivity && !editMode &&
                        <ActivityDetails 
                            activity={selectedActivity} 
                            openForm={openForm} 
                            cancelSelectActivity={cancelSelectActivity}/>
                    }
                    {
                        editMode &&
                        <ActivityForm 
                            activity={selectedActivity} 
                            closeForm={closeForm}
                            createOrEdit={createOrEdit }
                        />
                    }
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}

export default ActivityDashboard

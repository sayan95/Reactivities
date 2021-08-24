import React, { Fragment, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';


import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import LoadingComponent from '../layout/LoadingComponent';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

  return (
    <Fragment>
      <Navbar/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);

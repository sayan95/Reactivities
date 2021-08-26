// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import {Route, useLocation} from 'react-router-dom';

// app component imports
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


function App() {
  const location = useLocation(); 

  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route 
        path = {'/(.+)'}
        render = {() => (
          <Fragment>
            <Navbar/>
            <Container style={{ marginTop: '7em' }}>
              <Route exact path='/activities' component={ActivityDashboard}/>
              <Route path='/activities/:id' component={ActivityDetails}/>
              <Route key={location.key} path={['/activity/create', '/manage/:id']} component={ActivityForm}/>
            </Container>
          </Fragment>
        )}  
      />
    </Fragment>
  );
}

export default observer(App);

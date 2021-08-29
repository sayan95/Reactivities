// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import {Route, Switch, useLocation} from 'react-router-dom';

// app component imports
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import TestErrors from '../../features/errors/TestError';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <ToastContainer position='bottom-right'/>
      <Route exact path='/' component={HomePage} />
      <Route 
        path = {'/(.+)'}
        render = {() => (
          <Fragment>
            <Navbar/>
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/activities' component={ActivityDashboard}/>
                <Route path='/activities/:id' component={ActivityDetails}/>
                <Route key={location.key} path={['/activity/create', '/manage/:id']} component={ActivityForm}/>
                <Route path='/errors' component={TestErrors}/>
                <Route path='/server-error' component={ServerError}/>
                <Route component={NotFound}/>
              </Switch>
            </Container>
          </Fragment>
        )}  
      />
    </Fragment>
  );
}

export default observer(App);

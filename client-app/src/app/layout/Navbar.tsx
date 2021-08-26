// dependency imports
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// app component imports
import {Button, Container, Menu} from 'semantic-ui-react';

const Navbar = () => {
    return (
        <Fragment>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} to='/' exact header>
                        <img src='/assets/logo.png' alt='logo' style={{ marginRight:'10px' }}/>
                        Reactivities
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                    
                    <Menu.Item>
                        <Button as={NavLink} to='/activity/create' positive content='Create Activity'/>
                    </Menu.Item>
                </Container>
            </Menu>
        </Fragment>
    )
}

export default Navbar;

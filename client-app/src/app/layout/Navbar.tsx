// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../stores/store';

// app component imports
import {Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';

const Navbar = () => {
    const {userStore: {user, logout}} = useStore();
    return (
        <Fragment>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as={NavLink} to='/' exact header>
                        <img src='/assets/logo.png' alt='logo' style={{ marginRight:'10px' }}/>
                        Reactivities
                    </Menu.Item>

                    <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                    <Menu.Item as={NavLink} to='/errors' name='Errors' />
                    <Menu.Item>
                        <Button as={NavLink} to='/activity/create' positive content='Create Activity'/>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Image src={user?.image || '/assets/user.png'} avatar spaced='right'/>
                        <Dropdown pointing='top left' text={user?.displayName}>
                            <Dropdown.Menu>      
                                <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user'/>
                                <Dropdown.Item onClick={logout} text='Logout' icon='power'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Container>
            </Menu>
        </Fragment>
    )
}

export default observer(Navbar);

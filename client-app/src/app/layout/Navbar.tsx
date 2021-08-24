import React, { Fragment } from 'react';
import { useStore } from '../stores/store';

import {Button, Container, Menu} from 'semantic-ui-react';

const Navbar = () => {
    const {activityStore} = useStore();
    return (
        <Fragment>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item>
                        <img src='/assets/logo.png' alt='logo' style={{ marginRight:'10px' }}/>
                        Reactivities
                    </Menu.Item>

                    <Menu.Item name='Activities'/>
                    <Menu.Item>
                        <Button positive content='Create Activity' onClick={() => activityStore.openForm() }/>
                    </Menu.Item>
                </Container>
            </Menu>
        </Fragment>
    )
}

export default Navbar;

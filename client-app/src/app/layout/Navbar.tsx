import React, { Fragment } from 'react';

import {Button, Container, Menu} from 'semantic-ui-react';

interface Props{
    openForm: () => void;
}

const Navbar = ({openForm}:Props) => {
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
                        <Button positive content='Create Activity' onClick={openForm}/>
                    </Menu.Item>
                </Container>
            </Menu>
        </Fragment>
    )
}

export default Navbar;

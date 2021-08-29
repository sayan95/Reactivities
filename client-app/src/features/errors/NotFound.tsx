// dependency imports
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

// app component imports
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

const NotFound = () => {
    return (
        <Fragment>
            <Segment placeholder>
                <Header icon>
                    <Icon name='search'/>
                    Oops - we've looked everywhere and could not find this.
                </Header>
                <Segment.Inline>
                    <Button as={Link} to='/activities' primary>
                        return to activities page
                    </Button>
                </Segment.Inline>
            </Segment>
        </Fragment>
    )
}

export default NotFound

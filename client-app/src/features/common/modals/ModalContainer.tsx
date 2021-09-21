// dependency imports
import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import {useStore} from '../../../app/stores/store'; 
import { Modal } from 'semantic-ui-react';

// app component imports

const ModalContainer = () => {
    const {modalStore} = useStore();
    return (
        <Fragment>
            <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini' closeIcon>
                <Modal.Content>
                    {modalStore.modal.body}
                </Modal.Content>
            </Modal>
        </Fragment>
    )
}

export default observer(ModalContainer);

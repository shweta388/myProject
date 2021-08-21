import React, { useState }  from 'react'
import {useDialogContainer} from '@adobe/react-spectrum';
import {MenuTrigger,Menu} from '@adobe/react-spectrum'
import {ActionButton,Item,DialogContainer,AlertDialog} from '@adobe/react-spectrum'
import EditDialog from './EditDialog';
import Airplane from '@spectrum-icons/workflow/Airplane';
import {Dialog, DialogTrigger,setDialog} from '@adobe/react-spectrum'



function Project() {
    let [dialog, setDialog] = useState();

    return (
        <div>
              <MenuTrigger>
        <ActionButton aria-label="Actions">
          <Airplane />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit...</Item>
          <Item key="delete">Delete...</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' && <EditDialog />}
        {dialog === 'delete' && (
          <AlertDialog
            title="Delete"
            variant="destructive"
            primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        )}
      </DialogContainer>
        </div>
    ) 
}

export default Project

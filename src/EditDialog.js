import React from 'react'
import {useDialogContainer,Dialog,Heading,Divider,Content,Form,TextField,ButtonGroup,Button} from '@adobe/react-spectrum';
  
function EditDialog() {
    // This hook allows us to dismiss the dialog when the user
    // presses one of the buttons (below).
    let dialog = useDialogContainer();
  
    return (
      <Dialog>
        <Heading>Edit</Heading>
        <Divider />
        <Content>
          <Form labelPosition="side" width="100%">
            <TextField autoFocus label="First Name" defaultValue="John" />
            <TextField label="Last Name" defaultValue="Smith" />
          </Form>
        </Content>
        <ButtonGroup>
          <Button variant="secondary" onPress={dialog.dismiss}>
            Cancel
          </Button>
          <Button variant="cta" onPress={dialog.dismiss}>
            Save
          </Button>
        </ButtonGroup>
      </Dialog>
    );
  }

export default EditDialog

import {useState} from 'react';
import styled from 'styled-components';

import {Button} from 'components/Button';
import {Modal} from 'components/Modal';
import {Form, Input, Label} from 'components/Form';
import {Break} from 'components/Break';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContainer>
      <Button size="xs" variant="filled" onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        size="lg"
        title="Introduce yourself!"
        showCloseIcon>
        <Form>
          <Label htmlFor="firstName">First Name</Label>
          <Break />
          <Input id="firstName" type="text" placeholder="First name" />

          <Label sx={{marginTop: '20px'}} htmlFor="lastName">
            Last Name
          </Label>
          <Break />
          <Input id="lastName" type="text" placeholder="Last Name" />

          <Label sx={{marginTop: '20px'}} htmlFor="email">
            Email
          </Label>
          <Break />
          <Input id="email" type="email" placeholder="Email" />

          <Label sx={{marginTop: '20px'}} htmlFor="password">
            Password
          </Label>
          <Break />
          <Input id="password" type="password" placeholder="Password" />

          <Label sx={{marginTop: '20px'}} htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Break />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </Form>
      </Modal>
    </AppContainer>
  );
};

export default App;

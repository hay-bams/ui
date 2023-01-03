import {useCallback, useState} from 'react';
import styled from 'styled-components';

import {Accordion} from 'components/Accordion';
import {Form, Input, Label} from 'components/Form';
import {Break} from 'components/Break';
import {Modal} from 'components/Modal';
import {Button} from 'components/Button';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AccordionContainer = styled.div`
  width: 30vw;
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
        onClose={useCallback(() => setShowModal(false), [])}
        size="md"
        // overlayOpacity={0.9}
        title="Introduce yourself!">
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
      <Break />

      <AccordionContainer>
        <Accordion>
          <Accordion.Item value="Customization">
            <Accordion.Control>Customization</Accordion.Control>
            <Accordion.Panel>
              Colors, fonts, shadows and many other parts are customizable to
              fit your design needs
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Flexibility">
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>
              Configure components appearance and behavior with vast amount of
              settings or overwrite any part of component styles
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="No annoying focus ring">
            <Accordion.Control>No annoying focus ring</Accordion.Control>
            <Accordion.Panel>
              With new :focus-visible pseudo-class focus ring appears only when
              user navigates with keyboard
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </AccordionContainer>
    </AppContainer>
  );
};

export default App;

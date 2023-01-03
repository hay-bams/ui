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
  {/* TODO: Accordion height should be responsive */}
      <AccordionContainer>
        <Accordion>
          <Accordion.Item value="Accordion item 1">
            <Accordion.Control>Accordion item 1</Accordion.Control>
            <Accordion.Panel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              veritatis dolor fuga, ea deleniti et natus cupiditate. Minima
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Accordion item 2">
            <Accordion.Control>Accordion item 2</Accordion.Control>
            <Accordion.Panel>
              Veniam fugiat neque illo tenetur culpa reiciendis fuga, quod
              similique doloremque nisi deserunt itaque numquam tempora animi
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Accordion item 3">
            <Accordion.Control>Accordion item 3</Accordion.Control>
            <Accordion.Panel>
              Assumenda quibusdam voluptatibus optio praesentium temporibus,
              sequi rem itaque provident eveniet aliquid laboriosam earum
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </AccordionContainer>
    </AppContainer>
  );
};

export default App;

import {useState} from 'react';
import styled from 'styled-components';

import {Accordion} from 'components/Accordion';

export const AppContainer = styled.div`
  // display: flex;

  // justify-content: center;
  // align-items: center;
  height: 100vh;
`;

const AccordionContainer = styled.div`
  width: 30vw;
`;

const elements = [
  {position: 6, mass: 12.011, symbol: 'C', name: 'Carbon'},
  {position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen'},
  {position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium'},
  {position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium'},
  {position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium'},
];

export const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <AppContainer>
      {/* <Button size="xs" variant="filled" onClick={() => setShowDrawer(true)}>
        Show Drawer
      </Button> */}

      {/* <Modal
        open={showDrawer}
        onClose={useCallback(() => setShowDrawer(false), [])}
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
      </Modal> */}


      <AccordionContainer>
        <Accordion>
          <Accordion.Item>
            <Accordion.Control>Customization</Accordion.Control>
            <Accordion.Panel>
              Colors, fonts, shadows and many other parts are customizable to
              fit your design needs
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>
              Configure components appearance and behavior with vast amount of
              settings or overwrite any part of component styles
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item>
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

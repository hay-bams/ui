import {useCallback, useState} from 'react';
import styled from 'styled-components';

import {Accordion} from 'components/Accordion';
import {Form, Input, Label} from 'components/Form';
import {Break} from 'components/Break';
import {Modal} from 'components/Modal';
import {Button} from 'components/Button';
import {ReactComponent as IconPlus} from 'assets/icons/IconPlus.svg';
import {Tabs} from 'components/Tabs/Tabs';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SectionContainer = styled.div`
  width: 30vw;
`;

export const App = () => {
  const [value, setValue] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContainer>
      {/* <Button size="xs" variant="filled" onClick={() => setShowModal(true)}>
        Show Modal
      </Button> */}

      {/* <Modal
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
      </Modal> */}
      <Break />
      {/* TODO: Accordion height should be responsive */}
      <SectionContainer>
        {/* <Accordion
          transitionDuration={1000}
          chevron={<IconPlus />}
          styles={{chevron: {transform: 'rotate(45deg)'}}}
          value={value}
          onChange={setValue}>
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
        </Accordion> */}
        
        <Break />

        <Tabs defaultValue='tab3'>
          <Tabs.List>
            <Tabs.Tab value='tab1'>Tab1</Tabs.Tab>
            <Tabs.Tab value='tab2'>Tab2</Tabs.Tab>
            <Tabs.Tab value='tab3'>Tab3</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='tab1'>Panel 1</Tabs.Panel>

          <Tabs.Panel value='tab2'>Panel 2</Tabs.Panel>

          <Tabs.Panel value='tab3'>Panel 3</Tabs.Panel>
        </Tabs>
      </SectionContainer>
    </AppContainer>
  );
};

export default App;

import styled from 'styled-components';

import {Button} from 'components/Button';
// import { Btn } from 'components/Btn/Btn';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const App = () => (
  <AppContainer>
    <Button size="sm" variant="light">
      Button text
    </Button>

    {/* <Btn as='a' href='#'>Log out</Btn> */}
  </AppContainer>
);

export default App;

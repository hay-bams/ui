import styled from 'styled-components';

import {Button} from 'components/Button';
// import { ButtonUnstyled } from 'components/ButtonUnstyled';
// import { Btn } from 'components/Btn/Btn';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const App = () => (
  <AppContainer>
    <Button variant="filled" size="xl">
      Settings
    </Button>

    {/* <Btn as='a' href='#'>Log out</Btn> */}

    {/* <ButtonUnstyled /> */}
  </AppContainer>
);

export default App;

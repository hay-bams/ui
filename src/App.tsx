import styled from 'styled-components';

import {Button} from 'components/Button';

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
  </AppContainer>
);

export default App;
